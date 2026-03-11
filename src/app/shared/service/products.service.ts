import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private _httpClient : HttpClient
  ) { }

  BASE_URL : string = environment.BASE_PRODUCTS_URL
  SEARCH_URL : string = `${this.BASE_URL}/products/search`

  fetchSearchProduct(query : string){
    let params = new HttpParams().set('q', query)
    return this._httpClient.get<any>(this.SEARCH_URL, {params})
  }

}
