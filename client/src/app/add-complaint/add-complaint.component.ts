import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { ComplaintService } from '../../services/complaint.service'
import { AlertsService } from '@jaspero/ng2-alerts'
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-add-complaint',
  templateUrl: './add-complaint.component.html',
  styleUrls: ['./add-complaint.component.css']
})
export class AddComplaintComponent implements OnInit {
  user: any
  newComplaint: Object = {
    user: this.session.user._id,
    status: 'sent',
  }
  constructor(
    private session: SessionService,
    private complaint: ComplaintService,
    private _alert: AlertsService,
    private _notificationsService: NotificationsService
  ) { }

  ngOnInit() {
    this.user = this.session.user
  }

  addComplaint() {
    console.log(this.newComplaint)
    this.complaint.createComplaint(this.newComplaint)
      .subscribe(
        (complaint) => {
          // this._alert.create('success', 'Denuncia recibida correctamente')
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
        },
        (err) => console.log(err)
      )
    this.newComplaint = {}
  }

}
