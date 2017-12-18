import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-vendorshipment',
  templateUrl: './vendorshipment.component.html',
  styleUrls: ['./vendorshipment.component.css']
})
export class VendorshipmentComponent implements OnInit {

  constructor(private vendorshipment : StockService) { }

  vendorShipment:any={};
  ngOnInit() {
    this.vendorshipment.getVendors().subscribe(
      vendorShipment =>{ this.vendorShipment = vendorShipment
        console.log('vendorShipment',vendorShipment);
      })
  }
}
