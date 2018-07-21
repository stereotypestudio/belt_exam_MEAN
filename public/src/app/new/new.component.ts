import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
	newPet: any;
	skill1: any;
	skill2: any;
	skill3: any;
  errors: any [];
  constructor(private _http: HttpService, private _router: Router) {
  	this.newPet = {
  		name: "",
  		type: "",
  		description: "",
  		skills: []
  	}
   }

  ngOnInit() {
  }

  addPet(pet){
  	// console.log("Making pets");
   //  pet.skills = [this.skill1, this.skill2, this.skill3]
   //  console.log("Skills" ,pet.skills)
   var newpet = {
     name: this.newPet.name,
     type: this.newPet.type, 
     description: this.newPet.description,
     skillsArr: [this.skill1, this.skill2, this.skill3]
   }
  	let obvs = this._http.addPet(newpet);
  	obvs.subscribe(data => {
      console.log(data)
      if(data["message"]){
        this.errors = data["errors"].name.message;
        console.log(data["message"])
      } else{
        console.log("routing");
        this._router.navigate(['/'])
      }
    })
  	
  }

}
