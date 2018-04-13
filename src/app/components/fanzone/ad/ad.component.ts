import { Component, OnInit } from "@angular/core";
import {AdService} from'../../../shared-service/ad.service';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { RouterModule, Routes,Router } from '@angular/router';

@Component({
    selector:'add-ad',
    templateUrl:'./ad.component.html',
    styleUrls:['./ad.component.css']

})
export class AdComponent implements OnInit{

    private ads=[];
    public form: FormGroup;


    constructor(private _adService:AdService,private _router:Router){}

    ngOnInit(){

        this._adService.getAds().subscribe( data => this.ads = data.ads);
        this.form = new FormGroup({
            bid: new FormControl('',[Validators.required])
        })
    }





    makeOfferForAd(adid:any){
    
        let offer = this.form.value;
        console.log(offer);
        console.log(adid);
        this._adService.makeOffer(adid,offer,1);



    }





}
