import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { CinemaService } from '../../../shared-service/cinema.service';
import {Ticket} from '../../../ticket';
import {UserService} from'../../../shared-service/user.service';
import {User} from '../../../user';

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
  public hallcolumn2:any;
  public hallrow2:any;
  public price:any;
  public activeUser:User;
  
  public rowcol:string="";

  public ticket:Ticket;

  public cinemaReservationName:any;
  public projectionReservationName:any;

  
  public x:number=0;

  constructor(private _cinemaService:CinemaService,private _userService:UserService) { }

  ngOnInit() {

    this._cinemaService.getCinemas().subscribe((data)=>this.cinemas=data.cin);
    this._userService.getActiveUser().subscribe((data)=>this.activeUser=data);

   

    
  }

 getParams(cname:any,pname:any){

 console.log(cname);
 console.log(pname);
 }

 cinemaNameForm(valuee){
  console.log(valuee);
  this.projectionName = valuee;
  this.cinemaReservationName=valuee;

  this._cinemaService.getProjectionByCinemaName(valuee).subscribe((data)=>this.projections=data);
}

getTermsByCinemaAndProjectionName(valuee){

  this.projectionReservationName=valuee;
  this._cinemaService.getTermsByCinemaAndProjectionName(this.projectionName,valuee).subscribe((data)=>{this.terms=data;
  });
 
}

getDateByTerm(valuee){
  this.date=valuee;
 
}

getHallByTerm(valuee){
 
  console.log(this.terms);
  for (var i = 0; i <= this.terms.length-1; i++){
    if(this.terms[i].date==this.date) {
      this.time=this.terms[i].time;
      console.log(this.terms[i].time);
    }
    
   }
  this._cinemaService.getHallByTermId(valuee).subscribe((data)=>{this.hall=data.name;
    console.log(data);
    this.hallcolumn2 = Array(data.columns).fill(0);
    this.hallrow2 = Array(data.rows).fill(0);
    console.log("bioskop:"+this.cinemaReservationName+" projekcija:"+this.projectionReservationName+" Date:"+this.date+" Time:"+this.time);
  
  
    console.log("bioskop:"+this.cinemaReservationName+" projekcija:"+this.projectionReservationName+" Date:"+this.date+" Time:"+this.time);
 
  });
  
}

getSeatsByHall(valuee){
  this.hallcolumn= this.hallcolumn2;
  this.hallrow=this.hallrow2;
  
}

setPrice(valuee){
  this.price=valuee;
}

sendReservation(){
  this._cinemaService.reserveTicketForCinema(this.cinemaReservationName,this.projectionReservationName,this.price,this.activeUser.email,this.time,this.date,this.rowcol,this.rowcol);
}

setSeats(valuee){
  this.rowcol=this.rowcol+valuee;
}
 getSeats(){


 }

}
