import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AudiometrylistModule } from './audiometrylist/audiometrylist.module'
import { UserdashboardModule } from './userdashboard/userdashboard.module';
import { AppComponent } from './app.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { UploadComponent } from './upload/upload.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { WarrentiesComponent } from './warrenties/warrenties.component';
import { OrdersComponent } from './orders/orders.component';
import { DiagnosticsComponent } from './diagnostics/diagnostics.component';
import { CustomerDashboardService } from './services/customerdashboard.service';

import { routing } from './app.routing';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EodtallyComponent } from './eodtally/eodtally.component';
import { ComponentsIndexComponent } from './components-index/components-index.component';
import { NewentComponent } from './newent/newent.component';
import { NewcompanyComponent } from './newcompany/newcompany.component';
import { NewmodelComponent } from './newmodel/newmodel.component';
import { NewappointmentComponent } from './newappointment/newappointment.component';
import { NewexpenseComponent } from './newexpense/newexpense.component';
import { NewcashComponent } from './newcash/newcash.component';
import { NewcasehistoryComponent } from './newcasehistory/newcasehistory.component';
import { NewmouldComponent } from './newmould/newmould.component';
import { NewcasehistorydetailComponent } from './newcasehistorydetail/newcasehistorydetail.component';
import { NewOrderComponent } from './new-order/new-order.component';
import { NewpaymentComponent } from './newpayment/newpayment.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { NewTrailComponent } from './new-trail/new-trail.component';
import { Appconfig } from './app.config';


@NgModule({
  declarations: [
    AppComponent,
    CustomerDashboardComponent,
    CalendarComponent,
    CustomerDetailsComponent,
    UploadComponent,
    AppointmentsComponent,
    WarrentiesComponent,
    OrdersComponent,
    DiagnosticsComponent,
    LoginComponent,
    CustomerComponent,
    EodtallyComponent,
    ComponentsIndexComponent,
    NewentComponent,
    NewcompanyComponent,
    NewmodelComponent,
    NewappointmentComponent,
    NewexpenseComponent,
    NewcashComponent,
    NewcasehistoryComponent,
    NewmouldComponent,
    NewcasehistorydetailComponent,
    NewOrderComponent,
    NewpaymentComponent,
    NewproductComponent,
    NewTrailComponent
    
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AudiometrylistModule,
    UserdashboardModule
  ],
  providers: [CustomerDashboardService, Appconfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
