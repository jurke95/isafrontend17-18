import { Component, OnInit,ViewChild } from '@angular/core';
import {CinemaService} from'../../shared-service/cinema.service';

import { MatTableDataSource, MatPaginator } from '@angular/material';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Cinema} from '../../cinema';
import {Theatre} from '../../theatre';
import { RouterModule, Routes,Router } from '@angular/router';
import { ActivatedRoute, UrlSegment } from '@angular/router';


@Component({
  selector: 'app-listcinema',
  templateUrl: './listcinema.component.html',
  styleUrls: ['./listcinema.component.css']
})
export class ListcinemaComponent implements OnInit {




  private c:Cinema[];
  
  cin:any;
  
  data:any;
   
  
  constructor(private _cinemaService:CinemaService,route: ActivatedRoute) {  }

  
   
  
  ngOnInit() {
    this._cinemaService.getCinemas().subscribe((data)=>{
      
      this.c=data.cin;
      
  

     
  })

  
    
    
   


  




  
}

}





