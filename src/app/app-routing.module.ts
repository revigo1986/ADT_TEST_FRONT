import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchShowsComponent } from './aplication/search-shows/search-shows.component';


const routes: Routes = [
	{ path: '', redirectTo: 'searchShows', pathMatch: 'full'},
	{ path: 'searchShows', component: SearchShowsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
