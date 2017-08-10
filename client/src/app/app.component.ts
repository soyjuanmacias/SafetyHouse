import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { AlertsService } from '@jaspero/ng2-alerts'
import './js/init.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  user: any
  constructor(public session:SessionService){ }

  ngOnInit() {
    this.user = this.session.user
  }

  logout(){
    this.session.logout().subscribe();
  }
}
