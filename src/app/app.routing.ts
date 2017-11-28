import { Routes, RouterModule } from '@angular/router';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { EodtallyComponent } from './eodtally/eodtally.component'

const appRoutes : Routes = [
    {path:'customer-dashboard',component:CustomerDashboardComponent },
    {path:'login',component:LoginComponent},
    {path:'customer',component:CustomerComponent},
    {path:'eodtally', component:EodtallyComponent}
];

export const routing = RouterModule.forRoot(appRoutes); 