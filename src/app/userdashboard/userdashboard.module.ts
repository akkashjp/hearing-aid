import { NgModule } from '@angular/core';
import { UserdashboardComponent } from './userdashboard.component';
import { CommonModule } from '@angular/common';
import { CashflowComponent } from './cashflow/cashflow.component';
import { AwaitingComponent } from './awaiting/awaiting.component';
import { StockComponent } from './stock/stock.component';
import { VendorshipmentComponent } from './vendorshipment/vendorshipment.component';
import { SalesComponent } from './sales/sales.component';

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
    UserdashboardComponent
  ],
  bootstrap:[UserdashboardComponent]
})
export class UserdashboardModule { }
