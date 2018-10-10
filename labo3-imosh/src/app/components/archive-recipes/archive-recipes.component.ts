import { Component, OnInit } from '@angular/core';
import { ConsumeJsonService } from '../../services/consume-json.service';
import { ConsumeRestApiService } from '../../services/consume-rest-api.service';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-archive-recipes',
  templateUrl: './archive-recipes.component.html',
  styleUrls: ['./archive-recipes.component.css']
})
export class ArchiveRecipesComponent implements OnInit {

  recipes: [];

  constructor(
    private _ConsumeJsonService: ConsumeJsonService,
    private _ConsumeRestApiService: ConsumeRestApiService
  ) { }

  ngOnInit() {
    // this.getAllRecipes();
    this.getRecipes();
  }

  /* FOR JSON
  getAllRecipes() {
    this._ConsumeJsonService
    .getJSON()
    .subscribe(recipes => {
      this.recipes = recipes;

    });
  }*/

  getRecipes() {
    this._ConsumeRestApiService
    .showAllRecipes()
    .subscribe(recipes => {
      this.recipes = recipes;
      console.log(this.recipes);

    });
  }


}
