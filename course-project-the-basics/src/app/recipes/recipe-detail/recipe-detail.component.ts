import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  public theRecipe: Recipe;

  constructor(private recipeService: RecipeService,
      private slService: ShoppingListService) {
  }

  ngOnInit() {

    this.recipeService.recipeSelected.subscribe(
      (rcp: Recipe) => {
        this.theRecipe = rcp;
      }
    );
  }

  onBtnToShoppingList() {
    this.slService.appendIngredients(this.theRecipe.ingredients.slice());
  }

}
