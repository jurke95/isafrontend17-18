
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
  selector: 'app-listtheatre',
  templateUrl: './listtheatre.component.html',
  styleUrls: ['./listtheatre.component.css']
})
export class ListtheatreComponent implements OnInit {


  private t:Theatre[];
  th:any;
  data:any;





  constructor(private _theatreService:CinemaService,route: ActivatedRoute) { }

  ngOnInit() {

    this._theatreService.getTheatres().subscribe((data)=>{
      
      this.t=data.th;
  })

}
}