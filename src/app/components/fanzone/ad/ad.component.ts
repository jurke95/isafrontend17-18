import { Component, OnInit } from "@angular/core";
import {AdService} from'../../../shared-service/ad.service';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { RouterModule, Routes,Router } from '@angular/router';
import {Offer}from '../../../Offer';

@Component({
    selector:'add-ad',
    templateUrl:'./ad.component.html',
    styleUrls:['./ad.component.css']

})
export class AdComponent implements OnInit{

    private ads=[];
    public form: FormGroup;
    private o:Offer;


    constructor(private _adService:AdService,private _router:Router){}

    ngOnInit(){

        this._adService.getAds().subscribe( data => this.ads = data.ads);
        this.form = new FormGroup({
            bid: new FormControl('',[Validators.required])
        })
    }





    makeOfferForAd(adid:any){
    
        let offer = this.form.value;
        this.o=offer;
        console.log(this.o.bid);
        
        this._adService.makeOffer(adid,this.o.bid,2);



    }





}
