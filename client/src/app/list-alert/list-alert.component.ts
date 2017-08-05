import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../services/alert.service'

@Component({
  selector: 'app-list-alert',
  templateUrl: './list-alert.component.html',
  styleUrls: ['./list-alert.component.css']
})
export class ListAlertComponent implements OnInit {
  alertList: Array<object> = []

  constructor(
    private alert: AlertService,
  ) { }

  ngOnInit() {
    this.alert.listAlert()
      .subscribe(
      (alert) => {
        this.alertList = this.alert.alertList;
        console.log('Entro en this.alert dentro del componente =>')
        console.log(this.alertList)
      },
      (err) => console.log(err)
      )
    console.log('Entro en ngOnInit de List Complains')
    console.log(this.alert)
  }
}
