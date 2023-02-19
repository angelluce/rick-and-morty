import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  headers = new HttpHeaders().append('Content-Type', 'application/json');

  constructor(private _http: HttpClient) { }

  getData(url: string): Promise<any> {
    return this._http.get<any>(
      url
    ).toPromise();
  }

}
