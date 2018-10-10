import { Component, OnInit } from '@angular/core';
import { ConsumeJsonService } from '../../../services/consume-json.service';
import { ConsumeRestApiService } from '../../../services/consume-rest-api.service';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-detail-recipe',
  templateUrl: './detail-recipe.component.html',
  styleUrls: ['./detail-recipe.component.css']
})
export class DetailRecipeComponent implements OnInit {

  // TODO the model
  recipe: any;
  message: any;

  constructor(
    private route: ActivatedRoute,
    private _ConsumeJsonService: ConsumeJsonService
    private _ConsumeRestApiService: ConsumeRestApiService
  ) { }

  ngOnInit() {
    this.getRecipeApi();
    // this.getRecipe();
  }

  // to get a recipe with local json
  /*
  getRecipe() {
    this._ConsumeJsonService
    .getJSON()
    .subscribe(recipes => {
      const id = this.route.snapshot.params['id'];

      for (let i = 0; i < recipes.length; i++) {
        if (recipes[i].id == id)   {
          this.recipe = recipes[i];
        } else {
          this.message = 'No recipe exists with such id';
        }
      }
    });
  }*/


  getRecipeApi() {
    this._ConsumeRestApiService
    .showAllRecipes()
    .subscribe(recipes => {
      const id = this.route.snapshot.params['id'];

      for (let i = 0; i < recipes.length; i++) {
        if (recipes[i].id == id)   {
          this.recipe = recipes[i];
          console.log(this.recipe)
        } else {
          this.message = 'No recipe exists with such id';
        }
      }

    });
  }

}
