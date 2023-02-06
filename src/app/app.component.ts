import {Component} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Inicio';
  display = true;
  dockItems: MenuItem[] = [
    {
      label: 'Inicio',
      icon: "assets/icons/home.png",
      command: () => {
        this.title = 'Inicio';
        this.display = true;
      },
      routerLink: ['home'],
    },
    {
      label: 'Personajes',
      icon: "assets/icons/characters.png",
      command: () => {
        this.title = 'Personajes';
        this.display = true;
      },
      routerLink: ['characters'],
    },
    {
      label: 'Ubicaciones',
      icon: "assets/icons/locations.png",
      command: () => {
        this.title = 'Ubicaciones';
        this.display = true;
      },
      routerLink: ['locations'],
    },
    {
      label: 'Episodios',
      icon: "assets/icons/episodes.png",
      command: () => {
        this.title = 'Episodios';
        this.display = true;
      },
      routerLink: ['episodes'],
    }
  ];
}
