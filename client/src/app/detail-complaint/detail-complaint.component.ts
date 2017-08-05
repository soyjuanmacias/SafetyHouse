import { Component, OnInit } from '@angular/core';
import { ComplaintService } from '../../services/complaint.service'
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-detail-complaint',
  templateUrl: './detail-complaint.component.html',
  styleUrls: ['./detail-complaint.component.css']
})
export class DetailComplaintComponent implements OnInit {
  idComplaint: String
  oneComplaint: Object

  constructor(
    private complaint: ComplaintService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
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
  }

}
