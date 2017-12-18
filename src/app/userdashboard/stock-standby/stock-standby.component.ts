import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { StockService } from '../services/stock.service';


@Component({
  selector: 'app-stock-standby',
  templateUrl: './stock-standby.component.html',
  styleUrls: ['./stock-standby.component.css']
})
export class StockStandbyComponent implements OnInit {

  constructor(private stockservice:StockService) { }

  stockStandBy:any={};
  ngOnInit() {
    this.stockservice.getStockStandby().subscribe(
      stockStandBy =>{ this.stockStandBy = stockStandBy
        console.log('stockStandBy',stockStandBy);
      })
  }
}
