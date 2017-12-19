import { Injectable } from '@angular/core';
import { Http, Response , RequestOptions, Headers } from '@angular/http';
import { Appconfig } from '../../app.config';

@Injectable()
export class SalesService {

  constructor(private http : Http, private config : Appconfig) { }


  getSalesAllocated(){
    console.log('inside getSalesAllocated service');
    return this.http.get(this.config.apiUrlLocal+'/StockAllocated.json').map((response:Response) => response.json());
  }

  getSalesOverdues(){
    console.log('inside getSalesOverdues service');
    return this.http.get(this.config.apiUrlLocal+'/StockOverDues.json').map((response:Response) => response.json());
  }

  getSalesProcessing(){
    console.log('inside getSalesProcessing service');
    return this.http.get(this.config.apiUrlLocal+'/StockProcessing.json').map((response:Response) => response.json());
  }

  getSalesTrials(){
    console.log('inside getSalesTrials service');
    return this.http.get(this.config.apiUrlLocal+'/Trial(sales).json').map((response:Response) => response.json());
  }
  getcredits(){
    console.log('inside getcredits service');
    return this.http.get(this.config.apiUrlLocal+'/SalesCreditSpares.json').map((response:Response) => response.json());
  }

}
