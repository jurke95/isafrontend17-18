import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import {Theatre} from '../../theatre';
import { CinemaService } from '../../shared-service/cinema.service';
import {UserService} from '../../shared-service/user.service';
import {User} from '../../user';

@Component({
  selector: 'app-addtheatre',
  templateUrl: './addtheatre.component.html',
  styleUrls: ['./addtheatre.component.css']
})
export class AddtheatreComponent implements OnInit {

  public form: FormGroup;
  public users: any;

  constructor(private _cinemaService:CinemaService,private _userService:UserService) { }

  ngOnInit() {



    this._userService.getUsers().subscribe((data)=>{this.users=data.users;
    
    
    } );




    this.form = new FormGroup({
      id: new FormControl("",[Validators.required]),
      name: new FormControl('',[Validators.required]),
      location: new FormControl('', [Validators.required]),
      promOpis: new FormControl('',[Validators.required]),
      admin: new FormControl('',[Validators.required]),
  })
  }

  addTheatreForm(){
    let theatrefields = this.form.value;
   
    this._cinemaService.addTheatre(theatrefields);
  }


}
