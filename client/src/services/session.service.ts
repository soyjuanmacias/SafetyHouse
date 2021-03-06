import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment } from '../environments/environment';

export interface User{
  _id:string,
  username: string,
  password: string,
  updated_at: Date,
  created_at: Date,
  role: string,
}

@Injectable()
export class SessionService {
  user: User;
  startLoginCompleted: boolean = false;
  BASE_URL: string=`${environment.BASE_URL}/auth`;
  options: object = {withCredentials:true};

  constructor(public http:Http) {
    this.isLoggedIn().subscribe( (user:User) =>{
      console.log(`Welcome again user ${user.username}`)
      this.user = user;
      this.startLoginCompleted = true;
    }, e => this.startLoginCompleted = true);
  }

  handleError(e) {
    console.log('ERROR => '+e)
    console.error("Error en la llamada a la API");
    return Observable.throw(e.json().message);
  }

  signup(newUser):Observable<User> {
    console.log('Entro en crear usuario')
    return this.http.post(`${this.BASE_URL}/signup`, newUser, this.options)
      .map(res => {
        console.log('Entro en map del servicio signup =>')
        res.json()
      })
      .catch(this.handleError);
  }

  login(username:string, password:string):Observable<User> {
    return this.http.post(`${this.BASE_URL}/login`, {username,password}, this.options)
      .map(res => {
        this.user = res.json();
        return this.user;
      })
      .catch(this.handleError);
  }

  logout():Observable<object>{
    return this.http.get(`${this.BASE_URL}/logout`, this.options)
      .map(res => {
        res.json();
        this.user = undefined;
      })
      .catch(this.handleError);
  }

  isLoggedIn():Observable<User>{
    return this.http.get(`${this.BASE_URL}/loggedin`, this.options)
      .map(res => {
        this.user = res.json();
        return this.user;
      })
      .catch(this.handleError);
  }

  getPrivateData():Observable<object>{
    return this.http.get(`${this.BASE_URL}/private`, this.options)
      .map(res => res.json())
      .catch(this.handleError);
  }

}
