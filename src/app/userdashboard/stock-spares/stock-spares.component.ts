import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-stock-spares',
  templateUrl: './stock-spares.component.html',
  styleUrls: ['./stock-spares.component.css']
})
export class StockSparesComponent implements OnInit {

  constructor(private stockservice:StockService) { }

  stockspares:any={};
  ngOnInit() {
    this.stockservice.getStockSpares().subscribe(
      stockspares =>{ this.stockspares = stockspares
        console.log('stockspares',stockspares);
      })
  }


}
