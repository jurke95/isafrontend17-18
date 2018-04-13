import { Component, OnInit } from '@angular/core';
import {ProductService} from'../../../shared-service/product.service';
import {UserService} from'../../../shared-service/user.service';
import {User} from '../../../user';
import { RouterModule, Routes,Router } from '@angular/router';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
  })
  export class ProductComponent implements OnInit {
  
   private products=[];
   private activeUser:User;
   
    constructor(private _productService:ProductService,private _router:Router,private _userService:UserService) { }
  
    ngOnInit() {
      this._productService.getProducts().subscribe( data => this.products = data.products);
      this._userService.getActiveUser().subscribe((data)=>{this.activeUser=data;
       
      
      
      }
    );
    }
  
    deleteSelectedProduct(id:any){
     
     console.log(id);
      this._productService.deleteProduct(id).subscribe(

        data=>{
          this.ngOnInit();
        }
      )
    }

    reserveSelectedProduct(idprod:any,iduser:any){
      
     this._productService.reserveProduct(idprod,this.activeUser.id).subscribe(
           
      data=>{
        
      }



     )

  }


}