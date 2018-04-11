import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import {Theatre} from '../../theatre';
import { CinemaService } from '../../shared-service/cinema.service';

@Component({
  selector: 'app-addtheatre',
  templateUrl: './addtheatre.component.html',
  styleUrls: ['./addtheatre.component.css']
})
export class AddtheatreComponent implements OnInit {

  public form: FormGroup;
  constructor(private _cinemaService:CinemaService) { }

  ngOnInit() {

    this.form = new FormGroup({
      id: new FormControl("",[Validators.required]),
      name: new FormControl('',[Validators.required]),
      location: new FormControl('', [Validators.required]),
      promOpis: new FormControl('',[Validators.required]),
  })
  }

  addTheatreForm(){
    let theatrefields = this.form.value;
   
    this._cinemaService.addTheatre(theatrefields);
  }


}
