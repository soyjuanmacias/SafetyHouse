import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service'
import { AlertsService } from '@jaspero/ng2-alerts'

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
    number: '',
    street: '',
  }

  constructor(
    private session: SessionService,
    private _alert: AlertsService
  ) { }

  ngOnInit() {
  }

  signup() {
    this.newUser.username = this.newUser.email
    this.session.signup(this.newUser)
      .subscribe(
        (user) => {
          console.log('Usuario registrado en componente signup =>')
          console.log(user)
          this._alert.create('success', 'Nuevo usuario añadido a la base de datos')
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
        street: '',
        number: '',
      }
  }

}
