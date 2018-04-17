import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import {Cinema} from '../../cinema';
import { CinemaService } from '../../shared-service/cinema.service';
import {UserService} from '../../shared-service/user.service';
import {User} from '../../user';

@Component({
  selector: 'app-addcinema',
  templateUrl: './addcinema.component.html',
  styleUrls: ['./addcinema.component.css']
})
export class AddcinemaComponent implements OnInit {

  public form: FormGroup;
  public users: any;


  constructor(private _cinemaService:CinemaService,private _userService:UserService) { }

  ngOnInit() {

    
  this._userService.getUsers().subscribe((data)=>{this.users=data.users;
  } );



  this.form = new FormGroup({
    name: new FormControl('',[Validators.required]),
    location: new FormControl('', [Validators.required]),
    promOpis: new FormControl('',[Validators.required]),
    admin: new FormControl('',[Validators.required])
})


  }
  addCinemaForm(){
    let cinemafields = this.form.value;
   
    this._cinemaService.addCinema(cinemafields);
  }






}
