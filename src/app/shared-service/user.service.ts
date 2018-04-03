import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {User} from '../user';


import { Observable } from 'rxjs';
import { HttpModule } from '@angular/http';


import {HttpClient,HttpHeaders}from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class UserService {
  
  private baseUrl:string='http://localhost:8084/user';
  private user:User;
   constructor(private httpClient:HttpClient) {}


createUser(u:any) {

  this.user=u;
  const headers = new Headers({'Content-Type': 'application/json'});
  const body = JSON.stringify(this.user);
  console.log(this.user);
  this.httpClient.post('http://localhost:8084/user/registration',

{name:this.user.name,
 surname:this.user.surname,
 email:this.user.email,
 password1:this.user.password1,
 password2:this.user.password2,
 phonenumber:this.user.phonenumber,
 city:this.user.city
 
})
.subscribe(
  (data:any)=>{


  }
)
}
}
