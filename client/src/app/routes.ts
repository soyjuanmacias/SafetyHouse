import { Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component'
import { AddComplaintComponent } from './add-complaint/add-complaint.component'
import { ListComplaintComponent } from './list-complaint/list-complaint.component'
import { DashboardComponent } from './dashboard/dashboard.component'

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'complaint/list', component: ListComplaintComponent },
    { path: 'complaint/add', component: AddComplaintComponent },
    { path: '**', redirectTo: '' }
];
