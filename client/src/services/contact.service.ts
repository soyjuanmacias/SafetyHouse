import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../environments/environment'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

export interface User{
  username: String,
  role: String
}

@Injectable()
export class ContactService {
  user: User
  security: User
  startLoginCompleted: boolean = false
  BASE_URL: string=`${environment.BASE_URL}/contact`
  options: object = {withCredentials:true}
  securityList: Array<object> = []
  userList: Array<object> = []

  constructor(private http:Http) { }

  handleError(e) {
    console.log('ERROR => ' + e)
    console.error("Error en la llamada al endpoint Complaint");
    return Observable.throw(e.json().message);
  }


  listSecurity():Observable<User> {
    return this.http.get(`${this.BASE_URL}`, this.options)
      .map(res => {
        this.securityList = res.json();
      })
      .catch(this.handleError)
  }

  listUser():Observable<User> {
    return this.http.get(`${this.BASE_URL}`, this.options)
      .map(res => {
        this.userList = res.json();
      })
      .catch(this.handleError)
  }

  showUser(idUser):Observable<User> {
    return this.http.get(`${this.BASE_URL}/${idUser}`, this.options)
      .map(res => {
        this.user = res.json();
      })
      .catch(this.handleError)
  }

  showSecurity(idSecurity):Observable<User> {
    return this.http.get(`${this.BASE_URL}/${idSecurity}`, this.options)
      .map(res => {
        this.security = res.json();
      })
      .catch(this.handleError)
  }
}
