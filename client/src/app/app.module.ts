import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { SessionService } from '../services/session.service'
import { ComplaintService } from '../services/complaint.service'
import { AlertService } from '../services/alert.service'
import { HouseService } from '../services/house.service'
import { ContactService } from '../services/contact.service'
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
import { ListAlertComponent } from './list-alert/list-alert.component';
import { SignupComponent } from './signup/signup.component';
import { AddHouseComponent } from './add-house/add-house.component';
import { ListHouseComponent } from './list-house/list-house.component';
import { HousesComponent } from './houses/houses.component';
import { DetailComplaintComponent } from './detail-complaint/detail-complaint.component';
import { ContactComponent } from './contact/contact.component';
import { ContactSecurityComponent } from './contact-security/contact-security.component';
import { ContactUsersComponent } from './contact-users/contact-users.component'
import { FilterPipe } from './pipes/filter.pipe'
import { JasperoAlertsModule } from '@jaspero/ng2-alerts'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleNotificationsModule } from 'angular2-notifications';

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
    ListAlertComponent,
    SignupComponent,
    AddHouseComponent,
    ListHouseComponent,
    HousesComponent,
    DetailComplaintComponent,
    ContactComponent,
    ContactSecurityComponent,
    ContactUsersComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    JasperoAlertsModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [SessionService, ComplaintService, AlertService, HouseService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
