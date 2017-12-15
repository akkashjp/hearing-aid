import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CashflowService } from '../services/cashflow.service';

@Component({
  selector: 'app-cashflow-cc',
  templateUrl: './cashflow-cc.component.html',
  styleUrls: ['./cashflow-cc.component.css']
})
export class CashflowCcComponent implements OnInit {

  constructor( private cashflowService: CashflowService) { }
  cashflowcc:any={};
  ngOnInit() {
    console.log('cashflow-cc');
    this.cashflowService.getCashflowCc().subscribe(
      cashflowcc =>{ this.cashflowcc = cashflowcc
        console.log('cashflow',cashflowcc);
      })
  }

}
