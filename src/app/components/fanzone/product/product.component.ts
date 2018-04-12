import { Component, OnInit } from '@angular/core';
import {ProductService} from'../../../shared-service/product.service';

import { RouterModule, Routes,Router } from '@angular/router';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
  })
  export class ProductComponent implements OnInit {
  
   private products=[];

    constructor(private _productService:ProductService) { }
  
    ngOnInit() {
      this._productService.getProducts().subscribe( data => this.products = data.products);
    }
  
  }