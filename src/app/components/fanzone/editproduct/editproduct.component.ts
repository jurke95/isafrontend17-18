import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import {Product} from '../../../product';
import { ProductService } from '../../../shared-service/product.service';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  public form: FormGroup;
 product:Product;
 id_product:any;
product2:Product;
  constructor(private productService:ProductService,private route: ActivatedRoute,
  )
    
    
    
     { }

  ngOnInit() {
  this.getProductData();
    this.form = new FormGroup({
      name: new FormControl("",[Validators.required]),
      description: new FormControl("", [Validators.required]),
      image: new FormControl("",[Validators.required]),
      price: new FormControl("", [Validators.required]),
      boxoffice: new FormControl("",[Validators.required])
  })

 

    

}

getProductData(){

  var x=this.route.params._value.id;
 

  this.productService.getProduct(x)
  .subscribe(
    data=>{
      this.product=data;
      
    }
  );


 }

editProductForm(){
  var par=this.route.params._value.id;
  let productfields = this.form.value;
   
  this.productService.updateProduct(productfields,par);

}




}