import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {CharactersComponent} from './components/characters/characters.component';
import {LocationsComponent} from './components/locations/locations.component';
import {EpisodesComponent} from './components/episodes/episodes.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {DialogModule} from "primeng/dialog";
import {DockModule} from "primeng/dock";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharactersComponent,
    LocationsComponent,
    EpisodesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    DialogModule,
    DockModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
