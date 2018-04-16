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

@Component({
    selector:'add-offers',
    templateUrl:'./offers.component.html',
    styleUrls:['./offers.component.css']

})
export class OffersComponent implements OnInit{


    private offers = [];
    private ad:Ad;

    constructor(private _offerService:OfferService,private _adService:AdService,private route: ActivatedRoute,private _router: Router){}
    ngOnInit(){
        var x=this.route.params._value.id;

        this._adService.getAd(x).subscribe((data)=>this.ad=data);

        this._offerService.getOffersForAd(x).subscribe((data)=>this.offers=data); 

    }


}