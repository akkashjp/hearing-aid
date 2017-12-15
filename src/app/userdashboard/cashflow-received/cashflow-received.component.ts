import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CashflowService } from '../services/cashflow.service';

@Component({
  selector: 'app-cashflow-received',
  templateUrl: './cashflow-received.component.html',
  styleUrls: ['./cashflow-received.component.css']
})
export class CashflowReceivedComponent implements OnInit {

  constructor(private cashflowService: CashflowService) { }
  cashflowReceived:any=[];
  ngOnInit() {
    this.cashflowService.getCashflowReceived().subscribe(
      cashflowReceived =>{ this.cashflowReceived = cashflowReceived
        console.log('cashflowReceived',cashflowReceived);
      })
  }

}
