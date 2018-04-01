import { Component, OnInit } from '@angular/core';
import {User} from '../../user';
import { UserService } from '../../shared-service/user.service';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  
  public form: FormGroup;
  
  

  constructor(private _userService:UserService) {
    
   }

  ngOnInit() {

    this.form = new FormGroup({
      name: new FormControl('',[Validators.required]),
      surname: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      password1: new FormControl('', [Validators.required]),
      password2: new FormControl('', [Validators.required]),
      city: new FormControl('', Validators.required),
      phonenumber: new FormControl('', [Validators.required])
      

  })
  }

  registrationForm(){
    let userfields = this.form.value;
    console.log("stigao do ovde");
    this._userService.createUser(userfields);
    
  
}






}
