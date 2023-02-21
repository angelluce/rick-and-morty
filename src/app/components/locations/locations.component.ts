import {Component, OnInit} from '@angular/core';
import {LocationsModel} from "../../models/LocationsModel";
import {InfoModel} from "../../models/InfoModel";
import {RickAndMortyService} from "../../services/rick-and-morty.service";
import {paths} from "../../shared/paths";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  display = true;

  dataLocations: LocationsModel[];
  dataInfo: InfoModel;

  constructor(private rickmortyService: RickAndMortyService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getLocations(paths.locations);
  }

  getLocations(url: string): void {
    this.rickmortyService.getData(url)
      .then((res) => {
        this.dataLocations = res.results;
        this.dataInfo = res.info;
      })
      .catch((err) => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: err});
      });
  }

}
