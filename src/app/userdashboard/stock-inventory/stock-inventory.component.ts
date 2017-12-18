import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { StockService } from '../services/stock.service';


@Component({
  selector: 'app-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.css']
})
export class StockInventoryComponent implements OnInit {

  constructor(private stockservice:StockService) { }

  stockInventory:any={};
  ngOnInit() {
    this.stockservice.getStockInventory().subscribe(
      stockInventory =>{ this.stockInventory = stockInventory
        console.log('stockinventory',stockInventory);
      })
  }

}
