import { Component } from "@angular/core";
import {UserService} from'../../shared-service/user.service';
import {User} from '../../user';


@Component({
    selector:'app-navbar',
    templateUrl:'./navbar.component.html',
    styleUrls:['./navbar.component.css']
}) 
export class NavbarComponent {

    private activeUser:User;

    constructor(private _userService:UserService) {  }
    
    urlImg = '../../../assets/images/logo.png'

    ngOnInit() {
        
        this._userService.getActiveUser().subscribe((data)=>{this.activeUser=data;
        
        
        
        console.log("ovde treba da ispise rolu");
        
        
        });
    }

    deleteActiveUser(){

        this._userService.deleteActiveUser();
    }
}
