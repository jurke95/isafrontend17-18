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

 private product:Product;

  constructor(private _http:HttpClient) { }




  getProducts(): Observable<any>{

    return this._http.get('http://localhost:8084/fanzone/getProducts');
    
   }


   addProduct(p:any){
    this.product=p;
  
    this._http.post('http://localhost:8084/fanzone/addProducts',
      {id:this.product.id,
      name:this.product.name,
      description:this.product.description,
      image:this.product.image,
      price:this.product.price,
      boxoffice:this.product.boxoffice
      
     })
      .subscribe(
      (data:any)=>{ }
      )
    
    
    }



    deleteProduct(id:any){

      console.log("ovo je id u servisu"+id);
     return this._http.delete('http://localhost:8084/fanzone/deleteProducts/'+id);


    


    }


}
