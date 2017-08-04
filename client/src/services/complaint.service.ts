import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

export interface Complaint{
  title: String,
  description: String
}

@Injectable()
export class ComplaintService {
  complaint: Complaint; // The current logged in user
  startLoginCompleted: boolean = false;
  BASE_URL: string=`${environment.BASE_URL}/complaint`;
  options: object = {withCredentials:true};

  constructor(private http:Http) { }

  handleError(e) {
    console.log('ERROR => ' + e)
    console.error("Error en la llamada al endpoint Complaint");
    return Observable.throw(e.json().message);
  }


  listComplaint():Observable<Complaint>{
    return this.http.get(`${this.BASE_URL}`, this.options)
      .map(res => {
        console.log('Entro en List Complaint del servicio')
        console.log(res)
        return res.json()
      })
      .catch(this.handleError)
  }

}
