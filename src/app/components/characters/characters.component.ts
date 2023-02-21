import {Component, OnInit} from '@angular/core';
import {CharacterModel} from "../../models/CharacterModel";
import {RickAndMortyService} from "../../services/rick-and-morty.service";
import {InfoModel} from "../../models/InfoModel";
import {MessageService} from 'primeng/api';
import {paths} from "../../shared/paths";
import {Router} from "@angular/router";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  display = true;
  isLoading = true;

  dataCharacters: CharacterModel[];
  dataInfo: InfoModel;

  constructor(private rickmortyService: RickAndMortyService,
              private messageService: MessageService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getCharacters(paths.characters);
  }

  getCharacters(url: string): void {
    this.isLoading = true;
    this.dataCharacters = [];
    this.rickmortyService.getData(url)
      .then((res) => {
        this.dataCharacters = res.results;
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
