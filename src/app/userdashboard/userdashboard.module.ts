import { NgModule } from '@angular/core';
import { UserdashboardComponent } from './userdashboard.component';
import { CommonModule } from '@angular/common';
import { CashflowComponent } from './cashflow/cashflow.component';
import { AwaitingComponent } from './awaiting/awaiting.component';
import { StockComponent } from './stock/stock.component';
import { VendorshipmentComponent } from './vendorshipment/vendorshipment.component';
import { SalesComponent } from './sales/sales.component';
import { CashflowReceivedComponent } from './cashflow-received/cashflow-received.component';
import { CashflowMiComponent } from './cashflow-mi/cashflow-mi.component';
import { CashflowCcComponent } from './cashflow-cc/cashflow-cc.component';
import { CashflowChequesComponent } from './cashflow-cheques/cashflow-cheques.component';
import { CashflowDaybookComponent } from './cashflow-daybook/cashflow-daybook.component';
import { CashflowExpensesComponent } from './cashflow-expenses/cashflow-expenses.component';
import { AwaitingMouldsComponent } from './awaiting-moulds/awaiting-moulds.component';
import { AwaitingRepairsComponent } from './awaiting-repairs/awaiting-repairs.component';
import { AwaitingPosComponent } from './awaiting-pos/awaiting-pos.component';
import { AwaitingViaappordersComponent } from './awaiting-viaapporders/awaiting-viaapporders.component';
import { StockInventoryComponent } from './stock-inventory/stock-inventory.component';
import { StockStandbyComponent } from './stock-standby/stock-standby.component';
import { StockSparesComponent } from './stock-spares/stock-spares.component';
import { StockTransferreqComponent } from './stock-transferreq/stock-transferreq.component';
import { StockSendtocompComponent } from './stock-sendtocomp/stock-sendtocomp.component';
import { SalesTrialsComponent } from './sales-trials/sales-trials.component';
import { SalesProcessingComponent } from './sales-processing/sales-processing.component';
import { SalesAllocatedComponent } from './sales-allocated/sales-allocated.component';
import { SalesOverduesComponent } from './sales-overdues/sales-overdues.component';
import { SalesCreditsparesComponent } from './sales-creditspares/sales-creditspares.component';
import { AppointmentComponent } from './appointment/appointment.component';

import { CashflowService } from './services/cashflow.service';
import { AwaitingService } from './services/awaiting.service';
import { SalesService } from './services/sales.service';
import { StockService } from './services/stock.service';
import { AppointmentService } from './services/appointment.service';
import { KeysPipe } from '../keys.pipe';

import { routing } from '../app.routing';
import { SearchComponent } from './search/search.component';
import { Search1Component } from './search1/search1.component';
import { Search2Component } from './search2/search2.component';
import { SearchCallendarComponent } from './search-callendar/search-callendar.component';
import { SearchDeletedAppointmentsComponent } from './search-deleted-appointments/search-deleted-appointments.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    CashflowComponent, 
    AwaitingComponent, 
    StockComponent, 
    VendorshipmentComponent, 
    SalesComponent,
    UserdashboardComponent,
    CashflowReceivedComponent,
    CashflowMiComponent,
    CashflowCcComponent,
    CashflowChequesComponent,
    CashflowDaybookComponent,
    CashflowExpensesComponent,
    AwaitingMouldsComponent,
    AwaitingRepairsComponent,
    AwaitingPosComponent,
    AwaitingViaappordersComponent,
    StockInventoryComponent,
    StockStandbyComponent,
    StockSparesComponent,
    StockTransferreqComponent,
    StockSendtocompComponent,
    SalesTrialsComponent,
    SalesProcessingComponent,
    SalesAllocatedComponent,
    SalesOverduesComponent,
    SalesCreditsparesComponent,
    AppointmentComponent,
    KeysPipe,
    SearchComponent,
    Search1Component,
    Search2Component,
    SearchCallendarComponent,
    SearchDeletedAppointmentsComponent
  ],
  bootstrap:[
    UserdashboardComponent
  ],
  providers:[
    CashflowService,
    AwaitingService,
    SalesService,
    StockService,
    AppointmentService
  ]
  
})
export class UserdashboardModule { }
