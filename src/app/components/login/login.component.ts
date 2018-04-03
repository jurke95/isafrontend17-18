import { Component, OnInit } from '@angular/core';
import {User} from '../../user';
import { UserService } from '../../shared-service/user.service';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  
  

  constructor(private _userService:UserService) {
    
   }

  ngOnInit() {
    
      this.form = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password1: new FormControl('', [Validators.required]),
  })

  }

  loginForm(){
    let loginfields = this.form.value;
    console.log("stigao login");
    this._userService.loginUser(loginfields);
  }


}
