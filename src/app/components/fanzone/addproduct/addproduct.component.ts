import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import {Product} from '../../../product';
import { ProductService } from '../../../shared-service/product.service';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  public form: FormGroup;

  constructor(private _productService:ProductService) { }

  ngOnInit() {

    this.form = new FormGroup({
      name: new FormControl('',[Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('',[Validators.required]),
      price: new FormControl('', [Validators.required]),
      boxoffice: new FormControl('',[Validators.required])
  })
  }

    addProductForm(){
    let productfields = this.form.value;
   
    this._productService.addProduct(productfields);
  }


}
