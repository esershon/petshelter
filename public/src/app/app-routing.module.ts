import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PetlistComponent} from './petlist/petlist.component';
import {PetformComponent} from './petform/petform.component';
import {PetinfoComponent} from './petinfo/petinfo.component';
import {EditComponent} from './edit/edit.component';

const routes: Routes = [
  {path:'pets', component:PetlistComponent},
  {path:'pets/new', component:PetformComponent},
  {path:'pets/:id', component:PetinfoComponent},
  {path:'pets/:id/edit', component:EditComponent},
  //catch all
  {path: '**', component: PetlistComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
