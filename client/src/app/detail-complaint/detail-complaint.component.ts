import { Component, OnInit } from '@angular/core';
import { ComplaintService, Complaint } from '../../services/complaint.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-detail-complaint',
  templateUrl: './detail-complaint.component.html',
  styleUrls: ['./detail-complaint.component.css']
})
export class DetailComplaintComponent implements OnInit{
  idComplaint: any
  oneComplaint: any
  updateComplaint: any
  comment: any

  public time

  constructor(
    public complaint: ComplaintService,
    public route: ActivatedRoute,
    public router: Router,
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
    }, 1* 1000)
  }


  changeStatus() {
    if (this.oneComplaint.status == 'En proceso') {
      return this.updateComplaint = {
        status: 'Enviada',
        comment: this.comment
      }
    }
    if (this.oneComplaint.status == 'Enviada') {
      return this.updateComplaint = {
        status: 'En proceso',
        comment: this.comment
      }
    }
  }

  openComplaint() {
    this.updateComplaint = {
      status: 'En proceso',
      comment: this.comment
    }
    this.complaint.update(this.idComplaint, this.updateComplaint)
    .subscribe(
      (updatedComplaint) => {
        console.log('Denuncia actualizada, changed to: ' + this.updateComplaint.status)
        console.log(updatedComplaint)
      },
      (err) => console.log(err)
    )
  }

  conmuteComplainState() {
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

  closeComplaint() {
    this.updateComplaint = {
      status: 'Completada',
      comment: this.comment
    }
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
