import { Routes, RouterModule } from '@angular/router';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';

const appRoutes : Routes = [
    {path:'customer-dashboard',component:CustomerDashboardComponent },
    {path:'login',component:LoginComponent},
    {path:'customer',component:CustomerComponent}
];

export const routing = RouterModule.forRoot(appRoutes); 