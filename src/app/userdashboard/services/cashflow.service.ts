import { Injectable } from '@angular/core';
import { Http, Response , RequestOptions, Headers } from '@angular/http';
import { Appconfig } from '../../app.config';

@Injectable()
export class CashflowService {

  constructor(private http : Http, private config : Appconfig) { }

  getCashflowCc(){
    console.log('inside getCashflowCc service');
    return this.http.get(this.config.apiUrlLocal.CashflowCC).map((response:Response) => response.json());
  }

  getCashflowCheques(){
    console.log('inside getCashflowCheques service');
    return this.http.get(this.config.apiUrlLocal.CashflowCheques).map((response:Response) => response.json());
  }

  getCashflowDaybook(){
    console.log('inside getCashflowDaybook service');
    return this.http.get(this.config.apiUrlLocal.CashflowsDaybook).map((response:Response) => response.json());
  }

  getCashflowExpenses(){
    console.log('inside getCashflowExpenses service');
    return this.http.get(this.config.apiUrlLocal.CashflowsExpenses).map((response:Response) => response.json());
  }

  getCashflowMi(){
    console.log('inside getCashflowMi service');
    return this.http.get(this.config.apiUrlLocal.CashflowMI).map((response:Response) => response.json());
  }

  getCashflowReceived(){
    console.log('inside getCashflowReceived service');
    return this.http.get(this.config.apiUrlLocal.CashflowReceived).map((response:Response) => response.json());
  }


}
