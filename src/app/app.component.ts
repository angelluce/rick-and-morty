import {Component} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Home';
  dockItems: MenuItem[] = [
    /*
    {
      label: 'Home',
      icon: "assets/icons/home.png",
      command: () => {
        this.title = 'Home';
      },
      tooltipOptions: {
        tooltipLabel: "Home",
        tooltipPosition: 'bottom',
        positionTop: -15,
        positionLeft: 15
      },
      routerLink: ['home'],
    },*/
    {
      label: 'Characters',
      icon: "assets/icons/characters.png",
      command: () => {
        this.title = 'Characters';
      },
      tooltipOptions: {
        tooltipLabel: "Characters",
        tooltipPosition: 'bottom',
        positionTop: -15,
        positionLeft: 15
      },
      routerLink: ['characters'],
    },
    {
      label: 'Locations',
      icon: "assets/icons/locations.png",
      command: () => {
        this.title = 'Locations';
      },
      tooltipOptions: {
        tooltipLabel: "Locations",
        tooltipPosition: 'bottom',
        positionTop: -15,
        positionLeft: 15
      },
      routerLink: ['locations'],
    },
    {
      label: 'Episodes',
      icon: "assets/icons/episodes.png",
      command: () => {
        this.title = 'Episodes';
      },
      tooltipOptions: {
        tooltipLabel: "Episodes",
        tooltipPosition: 'bottom',
        positionTop: -15,
        positionLeft: 15
      },
      routerLink: ['episodes'],
    }
  ];
}
