import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-stock-transferreq',
  templateUrl: './stock-transferreq.component.html',
  styleUrls: ['./stock-transferreq.component.css']
})
export class StockTransferreqComponent implements OnInit {

  constructor(private stockservice:StockService) { }

  stockTransfer:any={};
  ngOnInit() {
    this.stockservice.getStockTransferreq().subscribe(
      stockTransfer =>{ this.stockTransfer = stockTransfer
        console.log('stockTransfer',stockTransfer);
      })
  }

}
