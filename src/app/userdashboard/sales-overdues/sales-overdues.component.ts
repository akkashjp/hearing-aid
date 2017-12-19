import { Component, OnInit } from '@angular/core';
import { SalesService } from '../services/sales.service'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sales-overdues',
  templateUrl: './sales-overdues.component.html',
  styleUrls: ['./sales-overdues.component.css']
})
export class SalesOverduesComponent implements OnInit {

  constructor(private salesService:SalesService) { }

  salesoverdue:any={};
  ngOnInit() {
    this.salesService.getSalesOverdues().subscribe(
      salesoverdue =>{ this.salesoverdue = salesoverdue
        console.log('salesoverdue',salesoverdue);
      })
  }
}
