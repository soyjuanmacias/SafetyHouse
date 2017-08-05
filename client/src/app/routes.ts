import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { LoginFormComponent } from './login-form/login-form.component'
import { ComplaintsComponent } from './complaints/complaints.component'
import { AddComplaintComponent } from './add-complaint/add-complaint.component'
import { ListComplaintComponent } from './list-complaint/list-complaint.component'
import { AlertsComponent } from './alerts/alerts.component'
import { AddAlertComponent } from './add-alert/add-alert.component'
import { ListAlertComponent } from './list-alert/list-alert.component'
import { SignupComponent } from './signup/signup.component'
import { HousesComponent } from './houses/houses.component'
import { AddHouseComponent } from './add-house/add-house.component'
import { ListHouseComponent } from './list-house/list-house.component'

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'complaint', component: ComplaintsComponent },
    { path: 'complaint/list', component: ListComplaintComponent },
    { path: 'complaint/add', component: AddComplaintComponent },
    { path: 'alert', component: AlertsComponent },
    { path: 'alert/list', component: ListAlertComponent },
    { path: 'alert/add', component: AddAlertComponent },
    { path: 'house', component: HousesComponent },
    { path: 'house/list', component: ListHouseComponent },
    { path: 'house/add', component: AddHouseComponent },
    { path: 'signup', component: SignupComponent },
    { path: '**', redirectTo: '' }
];
