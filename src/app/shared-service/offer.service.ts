import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {Ad} from '../ad';
import {Offer} from '../offer';


import {HttpClient,HttpHeaders}from '@angular/common/http';
import { DatePipe } from '@angular/common';


@Injectable()
export class OfferService {

  private ad:Ad;
  private offer:Offer;

  constructor(private _http:HttpClient) { }




  getOffersForAd(idad:any): Observable<any>{

    return this._http.get('http://localhost:8084/fanzone/getOffersForAd/'+idad);
    
   }







}
