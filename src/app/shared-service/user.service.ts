import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {User} from '../user';


import {HttpClient,HttpHeaders}from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class UserService {
  
  private baseUrl:string='http://localhost:8084/user';
 
   constructor(private _http:HttpClient) { }


createUser(user:User) {
  return this._http.post(this.baseUrl+'/registration',JSON.stringify(user));
}



}