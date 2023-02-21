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
import {ButtonModule} from 'primeng/button';
import {TagModule} from "primeng/tag";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import { InfoComponent } from './components/info/info.component';
import {DividerModule} from "primeng/divider";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharactersComponent,
    LocationsComponent,
    EpisodesComponent,
    InfoComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        DialogModule,
        DockModule,
        ButtonModule,
        TagModule,
        ToastModule,
        DividerModule
    ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
