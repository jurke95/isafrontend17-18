import { Component } from "@angular/core";
import {User} from '../../../user';
import { UserService } from '../../../shared-service/user.service';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
    selector:'app-editUserAccount',
    templateUrl:'./editUser.component.html',
    styleUrls:['./editUser.component.css']
})
export class EditUser{
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

  editUserForm(){
    let userfields = this.form.value;
    console.log("stigao do edit");
    this._userService.editUser(userfields);
    
  
}






}