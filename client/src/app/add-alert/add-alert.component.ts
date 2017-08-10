import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service'
import { AlertService } from '../../services/alert.service'
import { AlertsService } from '@jaspero/ng2-alerts'

@Component({
  selector: 'app-add-alert',
  templateUrl: './add-alert.component.html',
  styleUrls: ['./add-alert.component.css']
})
export class AddAlertComponent implements OnInit {
  newAlert: Object = {
    user: this.session.user._id,
    hour: new Date(),
    date: new Date(),
    status: 'sent',
  }
  constructor(
    private session: SessionService,
    private alert: AlertService,
    private _alert: AlertsService,
  ) { }

  ngOnInit() {
  }

addAlert(newAlert){
  this.alert.createAlert(this.newAlert)
    .subscribe(
      (alert) => {
        console.log('Entro de nuevo en el subscribeee del componente')
        console.log(alert)
        this._alert.create('success', `Alerta recibida correctamente. Recibirás una llamada de Seguridad`)
      },
      (err) => console.log(err)
    )
    this.newAlert = {}
  }
}
