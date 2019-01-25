import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {HttpService} from '../http.service';



@Component({
  selector: 'app-petform',
  templateUrl: './petform.component.html',
  styleUrls: ['./petform.component.css']
})
export class PetformComponent implements OnInit {
  newPet:any;
  creationErrors:any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) {
    this.newPet={
      name:"",
      type:"",
      description:"",
      skills:{
        skill1:"",
        skill2:"",
        skill3:""
      },
      likes:0
    }
   }

  ngOnInit() {
  }

  addPet() {
    console.log("I've called the addPet function")
    this._httpService.postPet(this.newPet).subscribe(data=>{
      if (data['errors']) {
        this.creationErrors = data;
      }
      else{
        console.log(this.newPet);
        console.log("I think I made a new pet", data)
        this._router.navigate(['/pets']);
      }
    })
  }

  goList(){
    this._router.navigate(['/pets']);
  }
}
