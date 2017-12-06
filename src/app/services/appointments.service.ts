import { Injectable } from '@angular/core';
import { Http, Response , RequestOptions, Headers } from '@angular/http';
import { Appconfig } from '../app.config';

@Injectable()
export class AppointmentsService {

  constructor(private http : Http, private config : Appconfig) { }

  getAppoinments(){
    console.log('inside getAppoinments service');
    return this.http.get(this.config.apiUrl).map((response:Response) => response.json());
  }
 
}
