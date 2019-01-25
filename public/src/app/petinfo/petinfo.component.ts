import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';



@Component({
  selector: 'app-petinfo',
  templateUrl: './petinfo.component.html',
  styleUrls: ['./petinfo.component.css']
})
export class PetinfoComponent implements OnInit {
  myPet: any;
  liked:Boolean;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) {
    this.liked=false;
    this.myPet = {
      name: "",
      type: "",
      description: "",
      skills: [{
        skill1: "",
        skill2: "",
        skill3: ""
      }],
      likes: 0
    }
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this._httpService.getPet(params['id']).subscribe(pet => {
        console.log(pet);
        this.myPet = pet;
        //this is because I needed parameters from the url
      })
    })
  }

  likePet() {
    console.log("I'm going to try to like the pet")
    this._httpService.likePet(this.myPet._id).subscribe(data => {
      if (data['errors']) {
        console.log("There was an error liking the pet")
        console.log(data);
      }
      else {
        this._httpService.getPet(this.myPet._id).subscribe(pet => {
          console.log(pet);
          this.myPet = pet; //update the pet so you can see your own like
          this.liked=true;
        })
      }
    })
  }

  adoptPet() {
    this._httpService.deletePet(this.myPet._id).subscribe(data => {
      if (data['errors']) {
        console.log(data)
      }
      else {
        console.log("adopting pet")
        console.log(data)
        this._router.navigate(['/pets']);
      }
    })
  }
  
  goList(){
    this._router.navigate(['/pets']);
  }

}
