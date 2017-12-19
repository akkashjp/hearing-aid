import { Injectable } from '@angular/core';
import { Http, Response , RequestOptions, Headers } from '@angular/http';
import { Appconfig } from '../../app.config';

@Injectable()
export class StockService {

  constructor(private http : Http, private config : Appconfig) { }

  getStockInventory(){
    console.log('inside getStockInventory service');
    return this.http.get(this.config.apiUrlLocal.StockInventory).map((response:Response) => response.json());
  }

  getStockSendToComp(){
    console.log('inside getStockSendToComp service');
    return this.http.get(this.config.apiUrlLocal.StockSendToComp).map((response:Response) => response.json());
  }

  getStockSpares(){
    console.log('inside getStockSpares service');
    return this.http.get(this.config.apiUrlLocal.Stockspares).map((response:Response) => response.json());
  }

  getStockStandby(){
    console.log('inside getStockStandby service');
    return this.http.get(this.config.apiUrlLocal.StockTrial).map((response:Response) => response.json());
  }

  getStockTransferreq(){
    console.log('inside getStockTransferreq service');
    return this.http.get(this.config.apiUrlLocal.StockTransferReq).map((response:Response) => response.json());
  }

  getVendors(){
    console.log('inside vendorsshipment service');
    return this.http.get(this.config.apiUrlLocal.Vendor).map((response:Response) => response.json());
  }
}
