import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CashflowService } from '../services/cashflow.service';

@Component({
  selector: 'app-cashflow-daybook',
  templateUrl: './cashflow-daybook.component.html',
  styleUrls: ['./cashflow-daybook.component.css']
})
export class CashflowDaybookComponent implements OnInit {

  constructor(private cashflowService: CashflowService) { }
  cashflowDaybook:any={};
  ngOnInit() {
    this.cashflowService.getCashflowDaybook().subscribe(
      cashflowDaybook =>{ this.cashflowDaybook = cashflowDaybook
        console.log('cashflowdaybook',cashflowDaybook);
      })
  }

}
