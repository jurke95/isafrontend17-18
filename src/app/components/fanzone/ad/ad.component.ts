import { Component, OnInit } from "@angular/core";
import {AdService} from'../../../shared-service/ad.service';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { RouterModule, Routes,Router } from '@angular/router';
import {Offer}from '../../../Offer';
import {UserService} from'../../../shared-service/user.service';
import {User} from '../../../user';

@Component({
    selector:'add-ad',
    templateUrl:'./ad.component.html',
    styleUrls:['./ad.component.css']

})
export class AdComponent implements OnInit{

    private ads=[];
    public form: FormGroup;
    private o:Offer;
    private activeUser:User;


    constructor(private _adService:AdService,private _router:Router,private _userService:UserService){}

    ngOnInit(){

        this._adService.getAds().subscribe( data => this.ads = data.ads);
        this.form = new FormGroup({
            bid: new FormControl('',[Validators.required])
        })

        this._userService.getActiveUser().subscribe((data)=>{this.activeUser=data;
       
      
      
        }
      );
    }





    makeOfferForAd(adid:any){
    
        let offer = this.form.value;
        this.o=offer;
       
        
        this._adService.makeOffer(adid,this.o.bid,this.activeUser.id);



    }





}
