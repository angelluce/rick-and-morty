import {Component, OnInit} from '@angular/core';
import {LocationsModel} from "../../models/LocationsModel";
import {InfoModel} from "../../models/InfoModel";
import {RickAndMortyService} from "../../services/rick-and-morty.service";
import {paths} from "../../shared/paths";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  display = true;
  isLoading = true;
  pagination = 0;

  dataLocations: LocationsModel[];
  dataInfo: InfoModel;

  constructor(private rickmortyService: RickAndMortyService,
              private messageService: MessageService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getLocations(paths.locations, true);
  }

  getLocations(url: string, pag: boolean): void {
    this.isLoading = true;
    this.dataLocations = [];
    pag ? this.pagination++ : this.pagination--;
    this.rickmortyService.getData(url)
      .then((res) => {
        this.dataLocations = res.results;
        this.dataInfo = res.info;
        this.isLoading = false;
      })
      .catch((err) => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: err});
        this.isLoading = false;
      });
  }

  redirectToHome(): void {
    this.display = false;
    this.router.navigate(['/home'])
      .catch((err) => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: err});
      });
  }

}
