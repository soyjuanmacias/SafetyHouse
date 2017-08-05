import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { LoginFormComponent } from './login-form/login-form.component'
import { ComplaintsComponent } from './complaints/complaints.component'
import { AddComplaintComponent } from './add-complaint/add-complaint.component'
import { ListComplaintComponent } from './list-complaint/list-complaint.component'
import { AlertsComponent } from './alerts/alerts.component'
import { AddAlertComponent } from './add-alert/add-alert.component'
import { ListAlertComponent } from './list-alert/list-alert.component'

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'complaint', component: ComplaintsComponent },
    { path: 'complaint/list', component: ListComplaintComponent },
    { path: 'complaint/add', component: AddComplaintComponent },
    { path: 'alert', component: AlertsComponent },
    { path: 'alert/list', component: ListAlertComponent },
    { path: 'alert/add', component: AddAlertComponent },
    { path: '**', redirectTo: '' }
];
