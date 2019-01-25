import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  myPet: any;
  updateErrors: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService) {
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

  updatePet() {
    console.log("Called the update function in the ts file")
    this._httpService.updatePet(this.myPet._id, this.myPet).subscribe(data => {
      if (data['errors']) {
        this.updateErrors = data;
      }
      else {
        this._router.navigate(['/pets/' + this.myPet._id]);
      }
    })
  }
  goList() {
    this._router.navigate(['/pets']);
  }
}
