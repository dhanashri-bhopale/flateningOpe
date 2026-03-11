import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ishows } from '../model/shows';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  constructor(
    private _httpClient : HttpClient
  ) { }

  BASE_URL : string = environment.BASE_SHOWS_URL
  SEARCH_URL : string = `${this.BASE_URL}/search/shows`

  fetchSearchShows(query : string){
    let params = new HttpParams().set('q', query)
    return this._httpClient.get<any>(this.SEARCH_URL, 
      {
        params : params
      }
    )
  }
}
