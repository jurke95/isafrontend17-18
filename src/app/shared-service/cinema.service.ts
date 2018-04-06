import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Cinema} from '../cinema';
import {Theatre} from '../theatre';

import {HttpClient,HttpHeaders}from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class CinemaService {

 private baseUrl:string='http://localhost:8084/cinemas';
 

  constructor(private _http:HttpClient) { }

 getCinemas(): Observable<any>{

  return this._http.get('http://localhost:8084/cinemas/getCinemas');
  
 }


 getTheatres(): Observable<any>{

  return this._http.get('http://localhost:8084/theatres/getTheatres');
  
 }





}
