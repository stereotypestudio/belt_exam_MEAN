import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
	{path: 'new', component: NewComponent},
	{path: 'edit/:id', component: EditComponent},
	{path: 'pets/:id', component: DetailComponent},
	{path: '',pathMatch: 'full', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }