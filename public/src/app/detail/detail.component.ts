import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
	 curPet:any
	 skills:any [];
	 @Input() p_id;
	 likes: any;
	 liked: boolean = false;
  constructor(private _http: HttpService, private _route: ActivatedRoute, private _router: Router) {
  	this.curPet = {};
  	this.skills = [];

   }

  ngOnInit() {
  	// this.getPet(this.p_id)
  	this._route.params.subscribe((params: Params) => {		
  		this.getPet(params['id']);
  	})
  }

  getPet(id){
  	let obvs = this._http.getPet(id);
  	obvs.subscribe(data => {
  		this.curPet = data;
  		this.skills = this.curPet.skills;
  		this.likes = data["likes"];
  		console.log(data);
  	});
  }

  adoptPet(id){
  	let obvs = this._http.removePet(id);
  	obvs.subscribe(data => console.log(data))

  	this._router.navigate(['/']);
  }

  likePet(id, pet){
  	this.liked = true;
  	this.likes ++;
  	let obvs = this._http.addLike(id, pet);
  	obvs.subscribe(data => {
  		console.log(data)
  		this.getPet(id);
  	});
  	

  }

}
