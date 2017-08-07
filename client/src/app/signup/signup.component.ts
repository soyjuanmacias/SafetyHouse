import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service'

// export interface newUserInter{
//   email: String,
//   username: String,
//   password: String
// }

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  error: String
  newUser = {
    name: '',
    lastName: '',
    username: '',
    telephone: '',
    password: '',
    role: '',
    email: '',
  }

  constructor(private session: SessionService) { }

  ngOnInit() {
  }

  signup() {
    this.newUser.username = this.newUser.email
    this.session.signup(this.newUser)
      .subscribe(
        (user) => {
          console.log('Usuario registrado en componente signup =>')
          console.log(user)
        },
        (err) => this.error = err
      );
      this.newUser = {
        name: '',
        lastName: '',
        username: '',
        telephone: '',
        password: '',
        role: '',
        email: '',
      }
  }

}
