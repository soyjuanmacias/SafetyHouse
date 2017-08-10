import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service'

@Component({
  selector: 'app-contact-users',
  templateUrl: './contact-users.component.html',
  styleUrls: ['./contact-users.component.css']
})
export class ContactUsersComponent implements OnInit {
  userList: any = []

  constructor(
    public contact: ContactService,
  )
  {
    this.contact.listUser()
      .subscribe(
        (user) => {
          this.userList = this.contact.userList
        }
      )
  }

  ngOnInit() {
    this.contact.listUser()
      .subscribe(
        (user) => {
          this.userList = this.contact.userList;
          console.log('Entro en this.contact dentro del componente user-contact =>')
          console.log(this.userList)
        },
        (err) => console.log(err)
      )
  }

}
