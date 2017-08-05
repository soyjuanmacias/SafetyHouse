import { Component, OnInit } from '@angular/core';
import { ComplaintService } from '../../services/complaint.service';

@Component({
  selector: 'app-list-complaint',
  templateUrl: './list-complaint.component.html',
  styleUrls: ['./list-complaint.component.css']
})
export class ListComplaintComponent implements OnInit {
  complaintList: Array<object> = []

  constructor(
    private complaint: ComplaintService,
  ) { }

  ngOnInit() {
    this.complaint.listComplaint()
      .subscribe(
      (complaint) => {
        this.complaintList = this.complaint.complaintList;
        console.log('Entro en this.complaint dentro del componente =>')
        console.log(this.complaintList)
      },
      (err) => console.log(err)
      )
    console.log('Entro en ngOnInit de List Complains')
    console.log(this.complaint)
  }
}
