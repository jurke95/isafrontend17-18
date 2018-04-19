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

  constructor(private _cinemaService:CinemaService) { }

  ngOnInit() {

    this._cinemaService.getCinemas().subscribe((data)=>this.cinemas=data.cin) 

    
  }

 cinemaNameForm(){
  console.log("usao u cinema name form");
}


}
