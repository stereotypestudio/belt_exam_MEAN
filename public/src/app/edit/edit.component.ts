import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
curPet: any;
errors: any [];
skills: any[];
skill1: any;
skill2: any;
skill3: any;

  constructor(private _http: HttpService, private _route: ActivatedRoute, private _router: Router) {
  	this.curPet = {name: "", type: "", description: "", likes: 0}
   }

  ngOnInit() {
  	this._route.params.subscribe((params: Params) => {		
  		this.getPet(params['id']);

  	})
  }

  getPet(id){
  	let obvs = this._http.getPet(id);
  	obvs.subscribe(data => {
  		console.log(data)
  		this.curPet = data
  		console.log(this.curPet);
  		this.skills = this.curPet.skills;
  		this.skill1 = this.skills[0].skill;
  		this.skill2 = this.skills[1].skill;
  		this.skill3 = this.skills[2].skill;
  	});
  }

  updatePet(pet, data){
  	var newpet = {
     name: this.curPet.name,
     type: this.curPet.type, 
     description: this.curPet.description,
     skillsArr: [this.skill1, this.skill2, this.skill3]
   }
   console.log("newPet", newpet)
  	let obvs = this._http.updatePet(pet, newpet)
  		obvs.subscribe(data => {
  			if(data['message']){
  				 this.errors = data["errors"].name.message;
  			} else {
  				this._router.navigate(['/']);
  			}
   });
  }

}
