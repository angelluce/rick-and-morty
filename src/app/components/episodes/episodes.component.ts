import {Component, OnInit} from '@angular/core';
import {RickAndMortyService} from "../../services/rick-and-morty.service";
import {EpisodesModel} from "../../models/EpisodesModel";
import {InfoModel} from "../../models/InfoModel";
import {MessageService} from "primeng/api";
import {paths} from "../../shared/paths";
import {Router} from "@angular/router";

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  display = true;
  isLoading = true;
  pagination = 0;

  dataEpisodes: EpisodesModel[];
  dataInfo: InfoModel;

  constructor(private rickmortyService: RickAndMortyService,
              private messageService: MessageService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getEpisodes(paths.episodes, true);
  }

  getEpisodes(url: string, pag: boolean): void {
    this.isLoading = true;
    this.dataEpisodes = [];
    pag ? this.pagination++ : this.pagination--;
    this.rickmortyService.getData(url)
      .then((res) => {
        this.dataEpisodes = res.results;
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
