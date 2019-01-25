import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getPets(){
    return this._http.get('/api/pets')
  }
  getPet(id){
    console.log("Getting one pet for you with id" + id)
    return this._http.get('/api/pets/'+id)
  }
  postPet(pet){
    return this._http.post('/api/pets', pet)
  }
  updatePet(id, update){
    console.log("Sending the update from the service to the server")
    return this._http.put('/api/pets/'+id, update)
  }
  deletePet(id){
    return this._http.delete('/api/pets/'+id)
  }
  likePet(id){
    console.log("I'm sending away to like the pet")
    console.log("The pet id is " +id)
    return this._http.get('/api/pets/'+ id + '/like')
  }
}