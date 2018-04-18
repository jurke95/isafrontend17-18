import { Component, OnInit } from '@angular/core';
import {Cinema} from '../../../cinema';
import { CinemaService } from '../../../shared-service/cinema.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { ParamMap } from '@angular/router';

@Component({
    selector: 'app-cinemaRepertoar',
    templateUrl: './cinemaRepertoar.component.html',
    styleUrls: ['./cinemaRepertoar.component.css']
  })
  export class CinemaRepertoar implements OnInit {
  
    public projections: any;
    private urlId : any;
    private c:Cinema;


    constructor(private _cinemaService:CinemaService,private route: ActivatedRoute,private _router: Router) {
    
    }
 
   ngOnInit() {

    this.route.paramMap.switchMap((params: ParamMap) => {
      let user_id = params.get('id');
     return user_id;
  })
  .subscribe(res => this.urlId = res);

   this._cinemaService.getCinema(this.urlId).subscribe((data)=>{this.c=data;
   });


   this._cinemaService.getRepertoar(this.urlId).subscribe((data)=>{this.projections=data;
    console.log(this.urlId);
   } );



   }
  }