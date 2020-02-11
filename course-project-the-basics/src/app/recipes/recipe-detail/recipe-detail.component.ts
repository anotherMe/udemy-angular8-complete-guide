import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  public currentRecipe: Recipe;

  constructor(private recipeService: RecipeService,
      private slService: ShoppingListService,
      private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
        this.currentRecipe = this.recipeService.getRecipe(+params['id']);
      }
    );

  }

  onBtnToShoppingList() {
    this.slService.appendIngredients(this.currentRecipe.ingredients.slice());
  }

}
