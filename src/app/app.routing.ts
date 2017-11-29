import { Routes, RouterModule } from '@angular/router';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { EodtallyComponent } from './eodtally/eodtally.component';
import { NewentComponent } from './newent/newent.component';
import { NewcompanyComponent } from './newcompany/newcompany.component';
import { NewmodelComponent } from './newmodel/newmodel.component';
import { NewappointmentComponent } from './newappointment/newappointment.component';
import { NewexpenseComponent } from './newexpense/newexpense.component';
import { NewcashComponent } from './newcash/newcash.component';
import { NewcasehistoryComponent } from './newcasehistory/newcasehistory.component';
import { NewmouldComponent } from './newmould/newmould.component';
import { ComponentsIndexComponent } from './components-index/components-index.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { NewTrailComponent } from './new-trail/new-trail.component';

const appRoutes : Routes = [
    {path:'',component:ComponentsIndexComponent},
    {path:'customer-dashboard',component:CustomerDashboardComponent },
    {path:'login',component:LoginComponent},
    {path:'customer',component:CustomerComponent},
    {path:'eodtally', component:EodtallyComponent},
    {path:'newent', component:NewentComponent},
    {path:'newcompany', component:NewcompanyComponent},
    {path:'newmodel', component:NewmodelComponent},
    {path:'newappointment', component:NewappointmentComponent},
    {path:'newexpense', component: NewexpenseComponent},
    {path:'newcash', component: NewcashComponent},
    {path:'newcasehistory',component:NewcasehistoryComponent},
    {path:'newmould',component:NewmouldComponent},
    {path:'neworder',component:NewOrderComponent},
    {path:'newtrail',component:NewTrailComponent}
    
];

export const routing = RouterModule.forRoot(appRoutes); 