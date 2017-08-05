import { Component, OnInit } from '@angular/core';
import { HouseService } from '../../services/house.service'

@Component({
  selector: 'app-add-house',
  templateUrl: './add-house.component.html',
  styleUrls: ['./add-house.component.css']
})
export class AddHouseComponent implements OnInit {
  newHouse: Object = {}

  constructor(private house: HouseService) { }

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
        },
        (err) => console.log(err)
      )
    this.newHouse = {}
  }

}
