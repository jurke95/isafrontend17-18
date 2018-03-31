import { Component, OnInit } from '@angular/core';
import {User} from '../../user';
import { UserService } from '../../shared-service/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private user: User;

  constructor(private _userService:UserService) { }

  ngOnInit() {
  }

  registrationForm(){
    this._userService.createUser(this.user);
  }

}
