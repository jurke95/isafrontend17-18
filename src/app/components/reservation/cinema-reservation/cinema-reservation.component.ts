import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { CinemaService } from '../../../shared-service/cinema.service';

@Component({
  selector: 'app-cinema-reservation',
  templateUrl: './cinema-reservation.component.html',
  styleUrls: ['./cinema-reservation.component.css']
})
export class CinemaReservationComponent implements OnInit {

  public form: FormGroup;
  public projections:any;
  public cinemas:any;
  public terms:any;
  public projectionName : any;
  public date:any;
  public time:any;
  public hall:any;

  constructor(private _cinemaService:CinemaService) { }

  ngOnInit() {

    this._cinemaService.getCinemas().subscribe((data)=>this.cinemas=data.cin) 

    
  }

 cinemaNameForm(valuee){
  console.log(valuee);
  this.projectionName = valuee;

  this._cinemaService.getProjectionByCinemaName(valuee).subscribe((data)=>this.projections=data);
}

getTermsByCinemaAndProjectionName(valuee){

  this._cinemaService.getTermsByCinemaAndProjectionName(this.projectionName,valuee).subscribe((data)=>{this.terms=data;
  });
 
}

getDateByTerm(valuee){
  this.date=valuee;
}

getHallByTerm(valuee){

  this._cinemaService.getHallByTermId(valuee).subscribe((data)=>{this.hall=data.name;
    console.log(this.hall);
  });
  
}

}
