import * as io from 'socket.io-client';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertService } from '../../services/alert.service'

@Component({
  selector: 'app-list-alert',
  templateUrl: './list-alert.component.html',
  styleUrls: ['./list-alert.component.css'],
})
export class ListAlertComponent implements OnInit, OnDestroy {
  alertList: any = []
  messages: any = [];
  connection
  message

  constructor(
    public alert: AlertService,
  ) { }

  ngOnInit() {
    var socket = io('http://localhost:3001');

    socket.on('notification:security', function (data) {
      console.log(arguments)
    });

    this.alert
      .listAlert()
      .subscribe(
      (alert) => {
        this.alertList = this.alert.alertList;
      },
      (err) => console.log(err)
      )
  }

  ngOnDestroy() {
    // this.connection.unsubscribe();
  }
}
