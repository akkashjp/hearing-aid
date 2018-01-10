import { Injectable } from '@angular/core';
import { Http, Response , RequestOptions, Headers } from '@angular/http';
import { Appconfig } from '../app.config';


@Injectable()
export class PostService {

  constructor(private http : Http, private config : Appconfig) { }
  postCashDeposit(data){   
    return this.http.post(this.config.apiUrlLocal.CashDeposit,data).map((response:Response) => response.json());
  }
  postCustomer(data){
    return this.http.post(this.config.apiUrlLocal.Customer,data).map((response:Response) => response.json());
  }
  postCompany(data){
    return this.http.post(this.config.apiUrlLocal.Company,data).map((response:Response) => response.json());
  }
  postProduct(data){
    return this.http.post(this.config.apiUrlLocal.Product,data).map((response:Response) => response.json());
  }
  postModel(data){
    return this.http.post(this.config.apiUrlLocal.Model,data).map((response:Response) => response.json());
  }
  postCashflowExpenses(data){
    return this.http.post(this.config.apiUrlLocal.CashflowsExpenses,data).map((response:Response) => response.json());
  }
  postAppointment(data){
    return this.http.post(this.config.apiUrlLocal.Appointment,data).map((response:Response) => response.json());
  }
  postCaseHistory(data){
    return this.http.post(this.config.apiUrlLocal.CaseHistory,data).map((response:Response) => response.json());
  }
  postENT(data){
    return this.http.post(this.config.apiUrlLocal.ENT,data).map((response:Response) => response.json());
  }
  postEodTally(data){
    return this.http.post(this.config.apiUrlLocal.EodTally,data).map((response:Response) => response.json());
  }
  postPayments(data){
    return this.http.post(this.config.apiUrlLocal.Payments,data).map((response:Response) => response.json());
  }
}

