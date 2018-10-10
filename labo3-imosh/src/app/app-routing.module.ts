import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArchiveRecipesComponent } from './components/archive-recipes/archive-recipes.component';
import { DetailRecipeComponent } from './components/archive-recipes/detail-recipe/detail-recipe.component';

const appRoutes: Routes = [
    {
      path: '',
      redirectTo: '/recipes',
      pathMatch: 'full'
    },
    {
      path: 'recipes',
      component: ArchiveRecipesComponent,
    },
    {
        path: 'recipes/recipe/:id',
        component: DetailRecipeComponent,
    },
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    declarations: [],
    exports: [
      RouterModule
    ]
  })

  export class AppRoutingModule {}
