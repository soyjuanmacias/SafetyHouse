import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { ComplaintService } from '../../services/complaint.service'

@Component({
  selector: 'app-add-complaint',
  templateUrl: './add-complaint.component.html',
  styleUrls: ['./add-complaint.component.css']
})
export class AddComplaintComponent implements OnInit {

  newComplaint: Object = {
    user: this.session.user._id,
    status: 'sent',
    date: new Date(),
    hour: new Date(),
  }
  constructor(
    private session: SessionService,
    private complaint: ComplaintService
  ) { }

  ngOnInit() {}

  addComplaint() {
    this.complaint.createComplaint(this.newComplaint)
      .subscribe(
        (complaint) => {
        },
        (err) => console.log(err)
      )
    this.newComplaint = {}
  }

}
