import { Component, OnInit, OnDestroy } from '@angular/core';
import { HouseService } from '../../services/house.service'

@Component({
  selector: 'app-list-house',
  templateUrl: './list-house.component.html',
  styleUrls: ['./list-house.component.css']
})
export class ListHouseComponent implements OnInit, OnDestroy {
  houseList: Array<Object> = []
  private time
  constructor(private house: HouseService) {
    this.time = setInterval(() => {
      this.house.listHouse()
        .subscribe(
          (complaint) => {
            this.houseList = this.house.houseList
          }
        )
    }, 10 * 1000)
  }

  ngOnDestroy() {
    clearInterval(this.time)
  }

  ngOnInit() {
  this.house.listHouse()
    .subscribe(
    (house) => {
      this.houseList = this.house.houseList;
      console.log('Entro en this.house dentro del componente =>')
      console.log(this.houseList)
    },
    (err) => console.log(err)
    )
  console.log('Entro en ngOnInit de List Complains')
  console.log(this.house)
  }

}
