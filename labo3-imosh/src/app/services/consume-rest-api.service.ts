import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ConsumeRestApiService {

  private baseUrl = ' http://localhost/wordpress/wp-json/wp/v2';
  // Local werkt wel, TODO: https://imramuha.cmsdevelopment.be/wordpress/wp-json/wp/v2

  headers: Headers = new Headers;
  options: any;

  constructor(private _http: Http) { }

  showAllRecipes() {
    return this._http.get(`${this.baseUrl}/recipes`)
    .map(res => res.json());
  }

  
  showRecipe(id) {
    return this._http.get(this.baseUrl + "/recipes/recipe/"+id).map(
      res => res.json()
    );
  }

}
