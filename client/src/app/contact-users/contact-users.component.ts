import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service'

@Component({
  selector: 'app-contact-users',
  templateUrl: './contact-users.component.html',
  styleUrls: ['./contact-users.component.css']
})
export class ContactUsersComponent implements OnInit {

  constructor(
    private contac: ContactService,
  )
  {
    this.complaint.listComplaint()
      .subscribe(
        (complaint) => {
          this.complaintList = this.complaint.complaintList
        }
      )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

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

    this.subscription = this.complaint.getCreateComplaintEmitter()
      .subscribe(list => this.updateList(list))
  }

  updateList(list) {
    this.complaintList = list
  }

}
