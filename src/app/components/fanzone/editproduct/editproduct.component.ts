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
  public product:Product;
  private tempProduct:Product;
 id_product:any;

  constructor(private productService:ProductService,private route: ActivatedRoute,
  )
    
    
    
     { }

  ngOnInit() {


    this.form = new FormGroup({
      name: new FormControl("",[Validators.required]),
      description: new FormControl("", [Validators.required]),
      image: new FormControl("",[Validators.required]),
      price: new FormControl("", [Validators.required]),
      boxoffice: new FormControl("",[Validators.required])
  })



    var x=this.route.params._value.id;
 

    this.productService.getProduct(x)
    .subscribe(
      data=>{
        this.product=data;
        this.form.setValue({
          name:    this.product.name,
          description: this.product.description,
          image:    this.product.image,
          price: this.product.price,
          boxoffice:    this.product.boxoffice
          
       });
        
      }
    );
  

  
  
    

 

    

}

 

editProductForm(){
  var par=this.route.params._value.id;
  let productfields = this.form.value;
   console.log(productfields);
  this.productService.updateProduct(productfields,par);

}




}