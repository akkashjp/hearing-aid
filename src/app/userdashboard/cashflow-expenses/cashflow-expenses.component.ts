import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CashflowService } from '../services/cashflow.service';

@Component({
  selector: 'app-cashflow-expenses',
  templateUrl: './cashflow-expenses.component.html',
  styleUrls: ['./cashflow-expenses.component.css']
})
export class CashflowExpensesComponent implements OnInit {

  constructor(private cashflowService: CashflowService) { }
  cashflowExpenses:any=[];
  ngOnInit() {
    this.cashflowService.getCashflowExpenses().subscribe(
      cashflowExpenses =>{ this.cashflowExpenses = cashflowExpenses
        console.log('cashflowexpenses',cashflowExpenses);
      })
  }

}
