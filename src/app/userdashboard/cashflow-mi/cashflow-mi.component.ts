import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CashflowService } from '../services/cashflow.service';

@Component({
  selector: 'app-cashflow-mi',
  templateUrl: './cashflow-mi.component.html',
  styleUrls: ['./cashflow-mi.component.css']
})
export class CashflowMiComponent implements OnInit {

  constructor(private cashflowService: CashflowService) { }
  getCashflowMi:any={};
  ngOnInit() {
    this.cashflowService.getCashflowMi().subscribe(
      getCashflowMi =>{ this.getCashflowMi = getCashflowMi
        console.log('cashflowmi',getCashflowMi);
      })
  }

}
