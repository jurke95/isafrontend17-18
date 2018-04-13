import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {Ad} from '../ad';

import {HttpClient,HttpHeaders}from '@angular/common/http';





@Injectable()
export class AdService {
  
  private ad:Ad;

  constructor(private _http:HttpClient) { }






  getAds(): Observable<any>{

    return this._http.get('http://localhost:8084/fanzone/getAds');
    
   }


   addAd(a:any,userid:any){
    this.ad=a;
  
    this._http.post('http://localhost:8084/fanzone/addAd?userId='+userid,
      {
      name:this.ad.name,
      description:this.ad.description,
      date:this.ad.date,
      image:this.ad.image
      
      
     })
      .subscribe(
      (data:any)=>{ }
      )
    
    
    }

   makeOffer(idad:any,money:any,userid:any){
  
     this._http.post('http://localhost:8084/fanzone/makeOffer/'+idad+'/?userId='+userid+'&offer='+money)
     .subscribe(
      (data:any)=>{ }
    

     )
   }


}
