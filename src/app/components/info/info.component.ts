import {Component, OnInit} from '@angular/core';
import {RickAndMortyService} from "../../services/rick-and-morty.service";
import {paths} from "../../shared/paths";
import {InfoModel} from "../../models/InfoModel";
import {SocialNetworksService} from "../../services/social-networks.service";
import {SocialNetworkModel} from "../../models/SocialNetworkModel";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  dataCaracters: InfoModel;
  dataLocations: InfoModel;
  dataEpisodes: InfoModel;
  dataSocialNetworks: SocialNetworkModel[];

  constructor(private rickAmdMortyApi: RickAndMortyService,
              private socialNetworksService: SocialNetworksService) {
  }

  ngOnInit(): void {
    this.rickAmdMortyApi.getData(paths.characters).then((res) => {
      this.dataCaracters = res.info;
    });
    this.rickAmdMortyApi.getData(paths.locations).then((res) => {
      this.dataLocations = res.info;
    });
    this.rickAmdMortyApi.getData(paths.episodes).then((res) => {
      this.dataEpisodes = res.info;
    });
    this.dataSocialNetworks = this.socialNetworksService.getSocialNetworks();
  }

}
