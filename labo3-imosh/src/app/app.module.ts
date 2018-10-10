import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ArchiveRecipesComponent } from './components/archive-recipes/archive-recipes.component';
import { DetailRecipeComponent } from './components/archive-recipes/detail-recipe/detail-recipe.component';


// services
import { ConsumeJsonService } from './services/consume-json.service';
import { ConsumeRestApiService } from './services/consume-rest-api.service';

@NgModule({
  declarations: [
    AppComponent,
    ArchiveRecipesComponent,
    DetailRecipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    ConsumeJsonService,
    ConsumeRestApiService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
