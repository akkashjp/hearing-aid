import { Component, OnInit } from '@angular/core';
import { SalesService } from '../services/sales.service'
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-sales-creditspares',
  templateUrl: './sales-creditspares.component.html',
  styleUrls: ['./sales-creditspares.component.css']
})
export class SalesCreditsparesComponent implements OnInit {

  constructor(private salesService:SalesService) { }

  salescredit:any={};
  ngOnInit() {
    this.salesService.getcredits().subscribe(
      salescredit =>{ this.salescredit = salescredit
        console.log('salescredit',salescredit);
      })
  }

}
