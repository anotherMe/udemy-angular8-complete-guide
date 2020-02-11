
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';


const routes: Routes = [
  { path: '', component: RecipesComponent},
  { path: 'recipes', component: RecipesComponent, children: [
    { path: 'detail/:id', component: RecipeDetailComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: 'edit/:id', component: RecipeEditComponent }
  ]},
  { path: 'shoppinglist', component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
