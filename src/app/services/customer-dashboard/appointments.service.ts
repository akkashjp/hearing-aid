import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AppointmentsService {
  appointments =[{'date':12/4/2017,
                   'type':'Hearing Aid Enquiry',
                  'audiologist':'chandana ongolo',
                'status':'HA ordered'},
                {'date':12/4/2017,
                'type':'Hearing Aid Enquiry',
               'audiologist':'chandana ongolo',
             'status':'HA ordered'}];

  constructor() { }

  getAll() {
    console.log('inside services');
    return this.appointments;
  }



}
