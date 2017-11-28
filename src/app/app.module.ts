import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { UploadComponent } from './upload/upload.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { WarrentiesComponent } from './warrenties/warrenties.component';
import { OrdersComponent } from './orders/orders.component';
import { DiagnosticsComponent } from './diagnostics/diagnostics.component';
import { AppointmentsService } from './services/customer-dashboard/appointments.service';


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
    NewcashComponent
    
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AppointmentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
