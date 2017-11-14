import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { UploadComponent } from './upload/upload.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { WarrentiesComponent } from './warrenties/warrenties.component';
import { OrdersComponent } from './orders/orders.component';
import { DiagnosticsComponent } from './diagnostics/diagnostics.component';

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
    DiagnosticsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
