import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {Ad} from '../ad';

import {HttpClient,HttpHeaders}from '@angular/common/http';
import { DatePipe } from '@angular/common';





@Injectable()
export class AdService {
  
  private ad:Ad;

  constructor(private _http:HttpClient,private datePipe: DatePipe) { }


  transformDate(date) {
    this.datePipe.transform(date, 'YYYY-MM-DD'); //whatever format you need. 
    console.log(date);
  }



  getAds(): Observable<any>{

    return this._http.get('http://localhost:8084/fanzone/getAds');
    
   }

   getAd(id:any): Observable<any>{

    return this._http.get('http://localhost:8084/fanzone/getAds/'+id);
    
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
      (data:any)=>{alert(data.message); }
      )
    
    
    }

   deleteAd(id:any){

    return this._http.delete('http://localhost:8084/fanzone/deleteAds/'+id).subscribe(

    (data:any)=>{alert(data.message);}
    )
   }

   acceptAd(id:any){

   return this._http.post('http://localhost:8084/fanzone/acceptAd/'+id,{}).subscribe(

    (data:any)=>{alert(data.message);}
  )

   


   }

   makeOffer(idad:any,money:any,userid:any){
  
     this._http.post('http://localhost:8084/fanzone/makeOffer/'+idad+'/?userId='+userid+'&offer='+money,{})
     .subscribe(
      (data:any)=>{ alert(data.message);}
    

     )
   }


}
