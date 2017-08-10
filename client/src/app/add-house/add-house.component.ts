import { Component, OnInit } from '@angular/core';
import { HouseService } from '../../services/house.service'
import { AlertsService } from '@jaspero/ng2-alerts'

@Component({
  selector: 'app-add-house',
  templateUrl: './add-house.component.html',
  styleUrls: ['./add-house.component.css']
})
export class AddHouseComponent implements OnInit {
  newHouse: any = {}

  constructor(
    public house: HouseService,
    public _alert: AlertsService
  ) { }

  ngOnInit() {
  }

  addHouse() {
    console.log('Funcion addHouse dentro del componente =>')
    console.log(this.newHouse)
    this.house.createHouse(this.newHouse)
      .subscribe(
        (house) => {
          console.log('Casa creada => Entro en this.house componente add-house =>')
          console.log(this.house)
          this._alert.create('success', 'Alerta recibida correctamente, nos ponemos en contacto')
        },
        (err) => console.log(err)
      )
    this.newHouse = {}
  }
}
