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
  complaint: Complaint;
  startLoginCompleted: boolean = false;
  BASE_URL: string=`${environment.BASE_URL}/complaint`;
  options: object = {withCredentials:true};
  complaintList: Array<object> = [];

  constructor(private http:Http) { }

  handleError(e) {
    console.log('ERROR => ' + e)
    console.error("Error en la llamada al endpoint Complaint");
    return Observable.throw(e.json().message);
  }


  listComplaint():Observable<Complaint>{
    return this.http.get(`${this.BASE_URL}`, this.options)
      .map(res => {
        this.complaintList = res.json();
      })
      .catch(this.handleError)
  }

  createComplaint(newComplaint):Observable<Complaint>{
    return this.http.post(`${this.BASE_URL}`, newComplaint, this.options)
      .map(res => {
        console.log('map después de la respuesta del post servicio complaint =>')
        console.log(res.json())
        console.log('Y ahora refresco otra vez la lista de complaint =>')
        this.listComplaint()
      })
      .catch(this.handleError)
  }

}
