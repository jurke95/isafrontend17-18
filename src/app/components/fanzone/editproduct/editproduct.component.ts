import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import {Product} from '../../../product';
import { ProductService } from '../../../shared-service/product.service';
import 'rxjs/add/operator/switchMap';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  public form: FormGroup;
  public product:Product;
  private tempProduct:Product;
  private id_product:any;
  private urlId : any;
  private urlIdPar : any;

  constructor(private productService:ProductService,private route: ActivatedRoute,private _router: Router
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

  this.route.paramMap.switchMap((params: ParamMap) => {
    let user_id = params.get('id');
   return user_id;
})
.subscribe(res => this.urlId = res);

var x=this.urlId;
 

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
  this.route.paramMap.switchMap((params: ParamMap) => {
    let user_id = params.get('id');
   return user_id;
})
.subscribe(res => this.urlIdPar = res);

var par=this.urlIdPar;
  let productfields = this.form.value;
   console.log(productfields);
  this.productService.updateProduct(productfields,par);
  this._router.navigateByUrl("/fanzone/products");
    window.location.reload(true);

}
}