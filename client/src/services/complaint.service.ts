import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../environments/environment'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

export interface Complaint{
  status: String,
  comment: String
}

@Injectable()
export class ComplaintService {
  complaint: Complaint;
  startLoginCompleted: boolean = false;
  BASE_URL: string=`${environment.BASE_URL}/complaint`;
  options: object = {withCredentials:true};
  complaintList: Array<object> = [];

  complaintEmitter: EventEmitter<any> = new EventEmitter()

  constructor(private http:Http) { }

  handleError(e) {
    console.log('ERROR => ' + e)
    console.error("Error en la llamada al endpoint Complaint");
    return Observable.throw(e.json().message);
  }


  listComplaint():Observable<Complaint> {
    return this.http.get(`${this.BASE_URL}`, this.options)
      .map(res => {
        this.complaintEmitter.emit(res.json())
        this.complaintList = res.json();
      })
      .catch(this.handleError)
  }

  showComplaint(idComplaint):Observable<Complaint> {
    return this.http.get(`${this.BASE_URL}/${idComplaint}`, this.options)
      .map(res => {
        this.complaint = res.json();
      })
      .catch(this.handleError)
  }

  createComplaint(newComplaint):Observable<Complaint> {
    return this.http.post(`${this.BASE_URL}`, newComplaint, this.options)
      .map(res => {
        this.listComplaint()
        console.log('Creo la denuncia, vengo de vuelta')
        return res.json()
      })
      .catch(this.handleError)
  }

  getCreateComplaintEmitter() {
    return this.complaintEmitter
  }

  update(id, updates):Observable<Complaint> {
    return this.http.put(`${this.BASE_URL}/${id}`, updates, this.options)
    .map(res => {
      return res.json()
    })
    .catch(this.handleError)
  }

}
