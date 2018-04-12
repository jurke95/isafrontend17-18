import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {Product} from '../product';
import {HttpClient,HttpHeaders}from '@angular/common/http';

@Injectable()
export class ProductService {




  constructor(private _http:HttpClient) { }




  getProducts(): Observable<any>{

    return this._http.get('http://localhost:8084/fanzone/getProducts');
    
   }


}
