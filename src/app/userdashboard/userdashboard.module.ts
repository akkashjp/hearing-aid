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

@NgModule({
  imports: [
    CommonModule
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
    StockSendtocompComponent
  ],
  bootstrap:[UserdashboardComponent]
})
export class UserdashboardModule { }
