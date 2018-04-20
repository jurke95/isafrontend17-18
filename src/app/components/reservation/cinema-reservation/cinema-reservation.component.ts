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
  public seats:any;
  public hallcolumn:any;
  public hallrow:any;
  
  public x:number=0;

  constructor(private _cinemaService:CinemaService) { }

  ngOnInit() {

    this._cinemaService.getCinemas().subscribe((data)=>this.cinemas=data.cin) 

   

    
  }

 getParams(cname:any,pname:any){

 console.log(cname);
 console.log(pname);
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
    this.hallcolumn = Array(data.columns).fill(0);
    this.hallrow = Array(data.rows).fill(0);
  /*  console.log(data);
    this.seats=data.seats;
    for (var i=1; i<data.seats.length; i++) 
    {

      if(this.seats[i-1].row==1){
        this.hallColumn=this.hallColumn+1;
       
      }else{
        this.hallrow=this.hallrow+1;
      }
    }
    console.log("this.hallRow");
    console.log(this.hallColumn);
*/
  
  });
  
}

}
