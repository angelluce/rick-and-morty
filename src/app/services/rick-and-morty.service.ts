import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  headers = new HttpHeaders().append('Content-Type', 'application/json');

  constructor(private _http: HttpClient) { }

  getCharacters(): Promise<any> {
    return this._http.get<any>(
      'https://rickandmortyapi.com/api/character'
    ).toPromise();
  }
}
