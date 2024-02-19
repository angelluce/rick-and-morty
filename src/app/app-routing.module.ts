import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {CharactersComponent} from "./components/characters/characters.component";
import {LocationsComponent} from "./components/locations/locations.component";
import {EpisodesComponent} from "./components/episodes/episodes.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'locations',
    component: LocationsComponent
  },
  {
    path: 'episodes',
    component: EpisodesComponent
  },
  {path: '', pathMatch: 'full', redirectTo: ''},
  {path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
