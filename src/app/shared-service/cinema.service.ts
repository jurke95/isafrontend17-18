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
 private cinema:Cinema;
 private theatre:Theatre;
 

 

  constructor(private _http:HttpClient) { }

 getCinemas(): Observable<any>{

  return this._http.get('http://localhost:8084/cinemas/getCinemas');
  
 }

 getCinema(id:any):Observable<any>{

  return this._http.get('http://localhost:8084/cinemas/getCinemas/'+id);
 }
 
 getTheatre(id:any):Observable<any>{

  return this._http.get('http://localhost:8084/theatres/getTheatres/'+id);
 }
 getTheatres(): Observable<any>{

  return this._http.get('http://localhost:8084/theatres/getTheatres');
  
 }

addCinema(c:any){

this.cinema=c;



  this._http.post('http://localhost:8084/cinemas/registration',
  {id:this.cinema.id,
  name:this.cinema.name,
   location:this.cinema.location,
  promOpis:this.cinema.promOpis,
  admin:this.cinema.admin[0]
  
 })
  .subscribe(
  (data:any)=>{ }
  )



}




addTheatre(t:any){
  this.theatre=t;
  
 
  this._http.post('http://localhost:8084/theatres/registration',
    {id:this.theatre.id,
    name:this.theatre.name,
    location:this.theatre.location,
    promOpis:this.theatre.promOpis,
    admin:this.theatre.admin[0]
  
   })
    .subscribe(
    (data:any)=>{ }
    )
  
  
  }



  getRepertoar(id:any): Observable<any>{

    return this._http.get('http://localhost:8084/cinemas/repertoar/'+id);
    
   }

   getRepertoarT(id:any): Observable<any>{

    return this._http.get('http://localhost:8084/theatres/repertoar/'+id);
    
   }



}
