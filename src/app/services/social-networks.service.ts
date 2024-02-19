import { Injectable } from '@angular/core';
import {SocialNetworkModel} from "../models/SocialNetworkModel";

@Injectable({
  providedIn: 'root'
})
export class SocialNetworksService {
  constructor() { }

  getSocialNetworks(): SocialNetworkModel[] {
    return [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/angellucero/',
        icon: 'pi-linkedin',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/angelluce',
        icon: 'pi-github',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/angel.lu24/',
        icon: 'pi-instagram',
      },
    ];
  }
}
