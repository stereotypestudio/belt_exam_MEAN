import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	allPets:any =[];
  constructor(private _http: HttpService) { }

  ngOnInit() {
  	this.getPets();
  }

  getPets(){
  	let obvs = this._http.getPets();
  	obvs.subscribe(data => this.allPets = data);
  }

}
