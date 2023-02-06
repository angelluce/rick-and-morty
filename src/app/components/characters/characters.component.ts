import { Component, OnInit } from '@angular/core';
import {CharacterModel} from "../../models/CharacterModel";
import {RickAndMortyService} from "../../services/rick-and-morty.service";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  dataCharacters: CharacterModel[] = [];
  display = true;

  constructor(private rickmortyService: RickAndMortyService) {
  }

  ngOnInit(): void {
    this.rickmortyService.getCharacters()
      .then((res) => {
        this.dataCharacters = res.results;
        console.log(this.dataCharacters)
        console.log(this.dataCharacters.length)
      })
      .catch((err) => {
        console.log(err)
      });
  }
}
