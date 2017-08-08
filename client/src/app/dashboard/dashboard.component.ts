import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service'
import { AlertsService } from '@jaspero/ng2-alerts'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: any
  constructor(
    private session: SessionService,
    private _alert: AlertsService
  ) { }

  ngOnInit() {
    this.user = this.session.user
  }

  alert() {
    this._alert.create('warning', `SOS, el vecino ${this.user.name} necesita ayuda!!`)
  }
}
