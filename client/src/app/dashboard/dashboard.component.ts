import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service'
import { AlertsService } from '@jaspero/ng2-alerts'
import { NotificationsService } from 'angular2-notifications';
import 'jquery';
import 'materialize-css';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  user: any

  constructor(
    public session: SessionService,
    public _alert: AlertsService,
    public _notificationsService: NotificationsService
  ) { }

  ngOnInit() {
    this.user = this.session.user
  }

  alert() {
    this._notificationsService.error(
      'ALERTA SOS',
      `SEGURIDAD!!! El vecino ${this.user.name} ha pulsado ALERTA ¡SOS!, Dirección: Calle ${this.user.street}, nº ${this.user.number}`,
      {
        timeOut: 30000,
        showProgressBar: true,
        pauseOnHover: false,
        clickToClose: true,
        maxLength: 0
      }
    )
  }
}
