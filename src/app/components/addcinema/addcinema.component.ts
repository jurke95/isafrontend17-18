import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import {Cinema} from '../../cinema';
import { CinemaService } from '../../shared-service/cinema.service';

@Component({
  selector: 'app-addcinema',
  templateUrl: './addcinema.component.html',
  styleUrls: ['./addcinema.component.css']
})
export class AddcinemaComponent implements OnInit {

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



  addCinemaForm(){
    let cinemafields = this.form.value;
   
    this._cinemaService.addCinema(cinemafields);
  }






}
