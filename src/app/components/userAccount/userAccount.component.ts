import { Component } from "@angular/core";
import {User} from '../../user';
import { RouterModule, Routes,Router } from '@angular/router';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {UserService} from'../../shared-service/user.service';


@Component({
    selector:'app-userAccount',
    templateUrl:'./userAccount.component.html',
    styleUrls:['./userAccount.component.css']

})
export class userAccount {
    private user:User;

    constructor(private _userService:UserService,route: ActivatedRoute) {  }
    
    ngOnInit() {
        this._userService.getUser().subscribe((data)=>this.user=data)  
    }
}