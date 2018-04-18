import { Component, OnInit } from '@angular/core';
import {Theatre} from '../../../../theatre';
import { CinemaService } from '../../../../shared-service/cinema.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { ParamMap } from '@angular/router';

@Component({
  selector: 'app-theatre-repertoar',
  templateUrl: './theatre-repertoar.component.html',
  styleUrls: ['./theatre-repertoar.component.css']
})
export class TheatreRepertoarComponent implements OnInit {

  public projections: any;
    private urlId : any;
    private t:Theatre;


  constructor(private _cinemaService:CinemaService,private route: ActivatedRoute,private _router: Router) { }

  ngOnInit() {

    this.route.paramMap.switchMap((params: ParamMap) => {
      let user_id = params.get('id');
     return user_id;
  })
  .subscribe(res => this.urlId = res);

  this._cinemaService.getTheatre(this.urlId).subscribe((data)=>{this.t=data;
  });


  this._cinemaService.getRepertoarT(this.urlId).subscribe((data)=>{this.projections=data;
    console.log(this.projections);
   
  } );





  }

}
