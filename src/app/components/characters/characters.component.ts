import {Component, OnInit} from '@angular/core';
import {CharacterModel} from "../../models/CharacterModel";
import {RickAndMortyService} from "../../services/rick-and-morty.service";
import {InfoModel} from "../../models/InfoModel";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  urlApi = 'https://rickandmortyapi.com/api/character';
  display = true;
  isLoading = true;

  dataCharacters: CharacterModel[];
  dataInfo: InfoModel;

  constructor(private rickmortyService: RickAndMortyService) {
  }

  ngOnInit(): void {
    this.getCharacters(this.urlApi);
  }

  getCharacters(url: string): void {
    this.isLoading = true;
    this.rickmortyService.getData(url)
      .then((res) => {
        this.dataCharacters = res.results;
        this.dataInfo = res.info;
        this.isLoading = false;
      })
      .catch((err) => {
        console.log(err)
      });
  }
}
