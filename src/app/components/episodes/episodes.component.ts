import {Component, OnInit} from '@angular/core';
import {RickAndMortyService} from "../../services/rick-and-morty.service";
import {EpisodesModel} from "../../models/EpisodesModel";
import {InfoModel} from "../../models/InfoModel";
import {MessageService} from "primeng/api";
import {paths} from "../../shared/paths";

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  display = true;

  dataEpisodes: EpisodesModel[];
  dataInfo: InfoModel;

  constructor(private rickmortyService: RickAndMortyService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getEpisodes(paths.episodes);
  }

  getEpisodes(url: string): void {
    this.rickmortyService.getData(url)
      .then((res) => {
        this.dataEpisodes = res.results;
        this.dataInfo = res.info;
      })
      .catch((err) => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: err});
      });
  }

}
