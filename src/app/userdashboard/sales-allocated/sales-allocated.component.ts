import { Component, OnInit } from '@angular/core';
import { SalesService } from '../services/sales.service'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sales-allocated',
  templateUrl: './sales-allocated.component.html',
  styleUrls: ['./sales-allocated.component.css']
})
export class SalesAllocatedComponent implements OnInit {

  constructor(private salesService:SalesService) { }

  salesallocated:any={};
  ngOnInit() {
    this.salesService.getSalesAllocated().subscribe(
      salesallocated =>{ this.salesallocated = salesallocated
        console.log('salesallocated',salesallocated);
      })
  }

}
