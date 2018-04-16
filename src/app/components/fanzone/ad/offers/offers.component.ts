import { Component, OnInit,ViewChild } from "@angular/core";
import {OfferService} from'../../../../shared-service/offer.service';
import {AdService} from'../../../../shared-service/ad.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Offer} from '../../../../offer';
import {Ad} from '../../../../ad';
import 'rxjs/add/operator/switchMap';
import { RouterModule, Routes,Router } from '@angular/router';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import {UserService} from '../../../../shared-service/user.service';
import {User} from '../../../../user';
import 'rxjs/add/operator/switchMap';
import { ParamMap } from '@angular/router';

@Component({
    selector:'add-offers',
    templateUrl:'./offers.component.html',
    styleUrls:['./offers.component.css']

})
export class OffersComponent implements OnInit{


    private offers = [];
    private ad:Ad;
    private activeUser:User;
    private urlId : any;

    constructor(private _offerService:OfferService,private _userService:UserService ,private _adService:AdService,private route: ActivatedRoute,private _router: Router){}
    ngOnInit(){
        

        this.route.paramMap.switchMap((params: ParamMap) => {
            let user_id = params.get('id');
           return user_id;
        })
        .subscribe(res => this.urlId = res);

        var x=this.urlId;

        this._adService.getAd(x).subscribe((data)=>this.ad=data);

        this._offerService.getOffersForAd(x).subscribe((data)=>this.offers=data); 

        this._userService.getActiveUser().subscribe((data)=>{this.activeUser=data} );

    }

   acceptOffer(adid:any,winner:any){

    this._offerService.acceptOfferFromBidder(adid,winner);

   }

}