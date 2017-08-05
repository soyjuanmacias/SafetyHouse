import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

export interface House{
  street: String,
  number: Number,
  floors: Number,
}

@Injectable()
export class HouseService {
  house: House;
  startLoginCompleted: boolean = false;
  BASE_URL: string=`${environment.BASE_URL}/house`;
  options: object = {withCredentials:true};
  houseList: Array<object> = [];

  constructor(private http:Http) { }

  handleError(e) {
    console.log('ERROR => ' + e)
    console.error("Error en la llamada al endpoint House");
    return Observable.throw(e.json().message);
  }


  listHouse():Observable<House>{
    return this.http.get(`${this.BASE_URL}`, this.options)
      .map(res => {
        this.houseList = res.json();
      })
      .catch(this.handleError)
  }

  createHouse(newHouse):Observable<House>{
    return this.http.post(`${this.BASE_URL}`, newHouse, this.options)
      .map(res => {
        console.log('map después de la respuesta del post servicio alert =>')
        console.log(res.json())
      })
      .catch(this.handleError)
  }
}
