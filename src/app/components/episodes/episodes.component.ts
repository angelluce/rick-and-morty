import { Component, OnInit } from '@angular/core';
import {RickAndMortyService} from "../../services/rick-and-morty.service";
import {EpisodesModel} from "../../models/EpisodesModel";
import {InfoModel} from "../../models/InfoModel";

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  urlApi = 'https://rickandmortyapi.com/api/episode';
  display = true;

  dataEpisodes: EpisodesModel[];
  dataInfo: InfoModel;

  constructor(private rickmortyService: RickAndMortyService) { }

  ngOnInit(): void {
    this.getEpisodes(this.urlApi);
  }

  getEpisodes(url: string): void {
    this.rickmortyService.getData(url)
      .then((res) => {
        this.dataEpisodes = res.results;
        this.dataInfo = res.info;
        console.log(this.dataEpisodes)
        console.log(this.dataInfo)
      })
      .catch((err) => {
        console.log(err)
      });
  }

}
