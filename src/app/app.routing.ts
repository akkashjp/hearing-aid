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
import { NewcasehistorydetailComponent } from './newcasehistorydetail/newcasehistorydetail.component';
import { NewpaymentComponent } from './newpayment/newpayment.component';
import {NewproductComponent} from './newproduct/newproduct.component';
import { NewTrailComponent } from './new-trail/new-trail.component';
import { BeraComponent} from './audiometrylist/bera/bera.component';
import { BriefhistoryComponent} from './audiometrylist/briefhistory/briefhistory.component';
import { EftComponent } from './audiometrylist/eft/eft.component';
import {ImaComponent} from './audiometrylist/ima/ima.component';
import {OaeComponent} from './audiometrylist/oae/oae.component';
import {ProvisionalComponent} from './audiometrylist/provisional/provisional.component'
import {RdtComponent} from './audiometrylist/rdt/rdt.component';
import {SfaComponent} from './audiometrylist/sfa/sfa.component';
import {SisiComponent} from './audiometrylist/sisi/sisi.component';
import {SpaComponent} from './audiometrylist/spa/spa.component'
import { TdtComponent } from './audiometrylist/tdt/tdt.component';
import { TteComponent } from './audiometrylist/tte/tte.component';
import {RecommendationsComponent} from './audiometrylist/recommendations/recommendations.component'
import {RinneComponent} from './audiometrylist/rinne/rinne.component';
import {WeberComponent} from './audiometrylist/weber/weber.component';
import {UserdashboardComponent} from './userdashboard/userdashboard.component'; 
import {NewaudiometryComponent} from './audiometrylist/newaudiometry/newaudiometry.component'
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { SparesListComponent } from './spares-list/spares-list.component';


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
    {path:'eodtally',component:EodtallyComponent},    
    {path:'newcasehistorydetail',component:NewcasehistorydetailComponent},    
    {path:'neworder',component:NewOrderComponent},
    {path:'newpayment',component:NewpaymentComponent},
    {path:'newproduct',component:NewproductComponent},
    {path:'newtrail',component:NewTrailComponent},
    {path:'bera', component:BeraComponent},
    {path:'brief', component:BriefhistoryComponent},
    {path:'eft', component:EftComponent},
    {path:'ima', component:ImaComponent},
    {path:'oae', component:OaeComponent},
    {path:'provisional', component:ProvisionalComponent},
    {path:'rdt', component:RdtComponent},
    {path:'sfa', component:SfaComponent},
    {path:'sisi', component:SisiComponent},
    {path:'spa', component:SpaComponent},
    {path:'tdt', component:TdtComponent},
    {path:'tte', component:TteComponent},
    {path:'recommendations', component:RecommendationsComponent},
    {path:'rinne', component:RinneComponent},
    {path:'weber', component:WeberComponent},
    {path:'newaudiometry', component:NewaudiometryComponent},
    {path:'userdashboard',component:UserdashboardComponent},
    {path:'productmanager',component:ProductManagerComponent},
    {path:'spareslist',component:SparesListComponent}

];

export const routing = RouterModule.forRoot(appRoutes); 