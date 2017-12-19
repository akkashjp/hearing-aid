import { Component, OnInit } from '@angular/core';
import { SalesService } from '../services/sales.service'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sales-processing',
  templateUrl: './sales-processing.component.html',
  styleUrls: ['./sales-processing.component.css']
})
export class SalesProcessingComponent implements OnInit {

  constructor(private salesService:SalesService) { }

  salesprocessing:any={};
  ngOnInit() {
    this.salesService.getSalesProcessing().subscribe(
      salesprocessing =>{ this.salesprocessing = salesprocessing
        console.log('salesprocessing',salesprocessing);
      })
  }
}
