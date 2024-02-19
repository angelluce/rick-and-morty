import {Component, OnInit} from '@angular/core';
import {SocialNetworksService} from "../../services/social-networks.service";
import {SocialNetworkModel} from "../../models/SocialNetworkModel";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  dataSocialNetworks: SocialNetworkModel[];

  constructor(private socialNetworksService: SocialNetworksService) {
  }

  ngOnInit(): void {
    this.dataSocialNetworks = this.socialNetworksService.getSocialNetworks();
  }

  getCurrentYear(): number {
    return new Date().getFullYear();
  }

}
