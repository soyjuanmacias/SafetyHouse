import { Component, OnInit, OnDestroy } from '@angular/core';
import { ComplaintService, Complaint } from '../../services/complaint.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-detail-complaint',
  templateUrl: './detail-complaint.component.html',
  styleUrls: ['./detail-complaint.component.css']
})
export class DetailComplaintComponent implements OnInit, OnDestroy{
  idComplaint: String
  oneComplaint: Complaint
  updateComplaint: Complaint

  private time

  constructor(
    private complaint: ComplaintService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.time = setInterval(() => {
      this.route.params.subscribe(params => {
        if (params['id'] != null) {
          this.idComplaint = params['id']
          this.complaint.showComplaint(this.idComplaint)
            .subscribe(
              (complaint) => {
                this.oneComplaint = this.complaint.complaint
              }
            )
        }
      })
    }, 1 * 1000)
    // this.complaint.getCreateComplaintEmitter()
    //   .subscribe(
    //
    //   )
  }

ngOnDestroy() {
  clearInterval(this.time)
}

  changeStatus() {
    if (this.oneComplaint.status == 'completed') {
      return this.updateComplaint = {
        status: 'sent'
      }
    }
    if (this.oneComplaint.status == 'sent') {
      return this.updateComplaint = {
        status: 'completed'
      }
    }
  }

    closeComplaint() {
    this.ngOnInit()
    this.changeStatus()
    this.complaint.update(this.idComplaint, this.updateComplaint)
    .subscribe(
    (updatedComplaint) => {
      console.log('Denuncia actualizada, changed to: ' + this.updateComplaint.status)
      console.log(updatedComplaint)
    },
    (err) => console.log(err)
    )
  }
}
