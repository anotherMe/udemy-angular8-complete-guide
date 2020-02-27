
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
// import { RecipesResolverService } from './recipes/recipes-resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: '', component: RecipesComponent},
  { path: 'recipes', component: RecipesComponent, canActivate: [AuthGuard], 
    children: [
      { path: 'detail/:id', component: RecipeDetailComponent },
      // { path: 'detail/:id', component: RecipeDetailComponent, resolve: [RecipesResolverService] },
      { path: 'new', component: RecipeEditComponent },
      { path: 'edit/:id', component: RecipeEditComponent }
      // { path: 'edit/:id', component: RecipeEditComponent, resolve: [RecipesResolverService] }
    ]},
  { path: 'shoppinglist', component: ShoppingListComponent},
  { path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
