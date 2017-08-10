import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service'

@Component({
  selector: 'app-contact-security',
  templateUrl: './contact-security.component.html',
  styleUrls: ['./contact-security.component.css']
})
export class ContactSecurityComponent implements OnInit {
  securityList: any = []

  constructor(
    public contact: ContactService,
  )
  {
    this.contact.listSecurity()
      .subscribe(
        (security) => {
          this.securityList = this.contact.securityList
        }
      )
  }

  ngOnInit() {
    this.contact.listSecurity()
      .subscribe(
        (security) => {
          this.securityList = this.contact.securityList;
          console.log('Entro en this.contact dentro del componente user-contact =>')
          console.log(this.securityList)
        },
        (err) => console.log(err)
      )
  }

}
