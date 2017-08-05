import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

export interface Alert{
  title: String,
  description: String
}

@Injectable()
export class AlertService {
  alert: Alert;
  startLoginCompleted: boolean = false;
  BASE_URL: string=`${environment.BASE_URL}/alert`;
  options: object = {withCredentials:true};
  alertList: Array<object> = [];

  constructor(private http:Http) { }

  handleError(e) {
    console.log('ERROR => ' + e)
    console.error("Error en la llamada al endpoint Alert");
    return Observable.throw(e.json().message);
  }


  listAlert():Observable<Alert>{
    return this.http.get(`${this.BASE_URL}`, this.options)
      .map(res => {
        this.alertList = res.json();
      })
      .catch(this.handleError)
  }

  createAlert(newAlert):Observable<Alert>{
    return this.http.post(`${this.BASE_URL}`, newAlert, this.options)
      .map(res => {
        console.log('map después de la respuesta del post servicio alert =>')
        console.log(res.json())
      })
      .catch(this.handleError)
  }

}
