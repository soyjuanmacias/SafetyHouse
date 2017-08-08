import { Component } from '@angular/core';
import { SessionService } from '../services/session.service';
import { AlertsService } from '@jaspero/ng2-alerts'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private session:SessionService){ }

  logout(){
    this.session.logout().subscribe();
  }
}
