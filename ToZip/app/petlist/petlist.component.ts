import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {HttpService} from '../http.service';
import { getLocaleDateTimeFormat } from '@angular/common';


@Component({
  selector: 'app-petlist',
  templateUrl: './petlist.component.html',
  styleUrls: ['./petlist.component.css']
})
export class PetlistComponent implements OnInit {
  pets: any;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.displayAllPets();
  }

  displayAllPets(){
    this._httpService.getPets().subscribe(pets => {
      this.pets = pets;
      console.log("Yo, here's the pets")
      console.log(pets);
    })
  }

  goDetails(id){
    this._router.navigate(['/pets/'+id]);
  }

  goEdit(id){
    this._router.navigate(['/pets/'+id + '/edit']);
  }

}
