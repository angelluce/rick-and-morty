import {Component, OnInit} from '@angular/core';
import {LocationsModel} from "../../models/LocationsModel";
import {InfoModel} from "../../models/InfoModel";
import {RickAndMortyService} from "../../services/rick-and-morty.service";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  urlApi = 'https://rickandmortyapi.com/api/location/';
  display = true;

  dataLocations: LocationsModel[];
  dataInfo: InfoModel;

  constructor(private rickmortyService: RickAndMortyService) {
  }

  ngOnInit(): void {
    this.getLocations(this.urlApi);
  }

  getLocations(url: string): void {
    this.rickmortyService.getData(url)
      .then((res) => {
        this.dataLocations = res.results;
        this.dataInfo = res.info;
        console.log(this.dataLocations)
        console.log(this.dataInfo)
      })
      .catch((err) => {
        console.log(err)
      });
  }

}
