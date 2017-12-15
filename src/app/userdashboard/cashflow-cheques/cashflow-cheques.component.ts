import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CashflowService } from '../services/cashflow.service';

@Component({
  selector: 'app-cashflow-cheques',
  templateUrl: './cashflow-cheques.component.html',
  styleUrls: ['./cashflow-cheques.component.css']
})
export class CashflowChequesComponent implements OnInit {

  constructor(private cashflowService: CashflowService) { }
  cashflowCheques:any=[];
  ngOnInit() {
    this.cashflowService.getCashflowCheques().subscribe(
      cashflowCheques =>{ this.cashflowCheques = cashflowCheques
        console.log('cashflowCheques',cashflowCheques);
      })
  }

}
