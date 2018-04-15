import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import {Ad} from '../../ad';
import { AdService } from '../../shared-service/ad.service';
import {UserService} from'../../shared-service/user.service';
import {User} from '../../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addad',
  templateUrl: './addad.component.html',
  styleUrls: ['./addad.component.css']
})
export class AddadComponent implements OnInit {

  public form: FormGroup;
  private activeUser:User;

  constructor(private _adService:AdService,private _userService:UserService,private _router: Router) { }

  ngOnInit() {

    this.form = new FormGroup({
      id: new FormControl("",[Validators.required]),
      name: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      date: new FormControl('', [Validators.required]),
      image: new FormControl('',[Validators.required])
  })

  this._userService.getActiveUser().subscribe((data)=>{this.activeUser=data;
       
      
      
  }
);
  }

  addAdForm(){
    let adfields = this.form.value;
   
    this._adService.addAd(adfields,this.activeUser.id);
    this._router.navigateByUrl("/fanzone/ads");
    window.location.reload(true);
    
    
  }



}
