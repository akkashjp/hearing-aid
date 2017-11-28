import { Routes, RouterModule } from '@angular/router';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { ComponentsIndexComponent } from './components-index/components-index.component';
import { EodtallyComponent } from './eodtally/eodtally.component';
import { NewOrderComponent } from './new-order/new-order.component';

const appRoutes : Routes = [
    {path:'',component:ComponentsIndexComponent},
    {path:'customer-dashboard',component:CustomerDashboardComponent },
    {path:'login',component:LoginComponent},
    {path:'customer',component:CustomerComponent},
    {path:'eodtally',component:EodtallyComponent},
    {path:'neworder',component:NewOrderComponent}
    
];

export const routing = RouterModule.forRoot(appRoutes); 