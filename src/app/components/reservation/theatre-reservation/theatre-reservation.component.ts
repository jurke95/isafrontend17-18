import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { CinemaService } from '../../../shared-service/cinema.service';
import {Tickett} from '../../../tickett';
import {UserService} from'../../../shared-service/user.service';
import {User} from '../../../user';

@Component({
  selector: 'app-theatre-reservation',
  templateUrl: './theatre-reservation.component.html',
  styleUrls: ['./theatre-reservation.component.css']
})
export class TheatreReservationComponent implements OnInit {
 
  public form: FormGroup;
  public projections:any;
  public theatres:any;
  public termts:any;
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

  public tickett:Tickett;

  public theatreReservationName:any;
  public projectionReservationName:any;

  public x:number=0;






  constructor(private _cinemaService:CinemaService,private _userService:UserService) { }

  ngOnInit() {

    this._cinemaService.getTheatres().subscribe((data)=>this.theatres=data.th);
    this._userService.getActiveUser().subscribe((data)=>this.activeUser=data);
  }



  getParams(tname:any,pname:any){

    console.log(tname);
    console.log(pname);
    }
   
    theatreNameForm(valuee){
     console.log(valuee);
     this.projectionName = valuee;
     this.theatreReservationName=valuee;
   
     this._cinemaService.getProjectionByTheatreName(valuee).subscribe((data)=>this.projections=data);
   }

   getTermtsByTheatreAndProjectionName(valuee){

    this.projectionReservationName=valuee;
    this._cinemaService.getTermtsByTheatreAndProjectionName(this.projectionName,valuee).subscribe((data)=>{this.termts=data;
    });
   
  }
  
  getDateByTermt(valuee){
    this.date=valuee;
   
  }




  getHallByTermt(valuee){
 
    console.log(this.termts);
    for (var i = 0; i <= this.termts.length-1; i++){
      if(this.termts[i].date==this.date) {
        this.time=this.termts[i].time;
        console.log(this.termts[i].time);
      }
      
     }


     this._cinemaService.getHallByTermtId(valuee).subscribe((data)=>{this.hall=data.name;
      console.log(data);
      this.hallcolumn2 = Array(data.columns).fill(0);
      this.hallrow2 = Array(data.rows).fill(0);
      console.log("pozoriste:"+this.theatreReservationName+" projekcija:"+this.projectionReservationName+" Date:"+this.date+" Time:"+this.time);
    
    
      console.log("pozoriste:"+this.theatreReservationName+" projekcija:"+this.projectionReservationName+" Date:"+this.date+" Time:"+this.time);
   
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
    this._cinemaService.reserveTicketForTheatre(this.theatreReservationName,this.projectionReservationName,this.price,this.activeUser.email,this.time,this.date,this.rowcol,this.rowcol);
  }
  
  setSeats(valuee){
    this.rowcol=this.rowcol+valuee;
  }
   getSeats(){
  
  
   }






}
