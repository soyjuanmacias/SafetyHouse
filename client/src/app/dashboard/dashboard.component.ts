import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: Object
  constructor(private session: SessionService) { }

  ngOnInit() {
    this.user = this.session.user
  }

}
