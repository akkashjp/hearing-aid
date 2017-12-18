import { Component, OnInit } from '@angular/core';
import { SalesService } from '../services/sales.service'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sales-trials',
  templateUrl: './sales-trials.component.html',
  styleUrls: ['./sales-trials.component.css']
})
export class SalesTrialsComponent implements OnInit {

  constructor(private salesService:SalesService) { }

  salestrials:any={};
  ngOnInit() {
    this.salesService.getSalesTrials().subscribe(
      salestrials =>{ this.salestrials = salestrials
        console.log('stockinventory',salestrials);
      })
  }

}
