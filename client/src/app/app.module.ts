import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { SessionService } from '../services/session.service'
import { ComplaintService } from '../services/complaint.service'
import { AlertService } from '../services/alert.service'
import { AppComponent } from './app.component'
import { HttpModule } from '@angular/http'
import { LoginFormComponent } from './login-form/login-form.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { AddComplaintComponent } from './add-complaint/add-complaint.component'
import { ListComplaintComponent } from './list-complaint/list-complaint.component'
import { RouterModule } from '@angular/router'
import { routes } from './routes';
import { ComplaintsComponent } from './complaints/complaints.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AddAlertComponent } from './add-alert/add-alert.component';
import { ListAlertComponent } from './list-alert/list-alert.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    DashboardComponent,
    AddComplaintComponent,
    ListComplaintComponent,
    ComplaintsComponent,
    AlertsComponent,
    AddAlertComponent,
    ListAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SessionService, ComplaintService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
