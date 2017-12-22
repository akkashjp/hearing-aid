import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { StockService } from '../services/stock.service';


@Component({
  selector: 'app-stock-sendtocomp',
  templateUrl: './stock-sendtocomp.component.html',
  styleUrls: ['./stock-sendtocomp.component.css']
})
export class StockSendtocompComponent implements OnInit {

  constructor(private stockservice:StockService) { }

  stockSendToComp:any={};
  ngOnInit() {
    this.stockservice.getStockSendToComp().subscribe(
      stockSendToComp =>{ this.stockSendToComp = stockSendToComp
        console.log('stockSendToComp',stockSendToComp);
      })
  }

}
