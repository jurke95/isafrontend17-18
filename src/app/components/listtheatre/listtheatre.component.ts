
import { Component, OnInit } from '@angular/core';
import {CinemaService} from'../../shared-service/cinema.service';

import { RouterModule, Routes,Router } from '@angular/router';


@Component({
  selector: 'app-listtheatre',
  templateUrl: './listtheatre.component.html',
  styleUrls: ['./listtheatre.component.css']
})
export class ListtheatreComponent implements OnInit {


  private theatres =[];

  constructor(private _theatreService:CinemaService) { }

  ngOnInit() {

    this._theatreService.getTheatres().subscribe( data => this.theatres = data.th)

}
}