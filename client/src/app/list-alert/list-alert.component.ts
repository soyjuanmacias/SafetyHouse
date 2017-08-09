import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertService } from '../../services/alert.service'
import { NotificationsService } from '../../services/notifications.service'

@Component({
  selector: 'app-list-alert',
  templateUrl: './list-alert.component.html',
  styleUrls: ['./list-alert.component.css'],
  providers: [NotificationsService]
})
export class ListAlertComponent implements OnInit, OnDestroy {
  alertList: Array<object> = []
  messages = [];
  connection
  message

  constructor(
    private alert: AlertService,
    private notifications: NotificationsService
  ) { }

  ngOnInit() {
    this.connection = this.notifications.getNotifications().subscribe(message => {
      this.messages.push(message);
    })

    this.alert.listAlert()
      .subscribe(
      (alert) => {
        this.alertList = this.alert.alertList;
      },
      (err) => console.log(err)
      )
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
