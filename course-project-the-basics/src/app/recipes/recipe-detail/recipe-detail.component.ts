import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  public currentRecipe: Recipe;

  constructor(private recipeService: RecipeService,
      private slService: ShoppingListService,
      private route: ActivatedRoute,
      private router: Router
    ) {
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

  onDeleteRecipe(id: number) {

    if (!confirm('Do you really want to delete this recipe ?'))
      return;

    this.recipeService.deleteRecipe(id);
    this.router.navigate(['recipes']);
  }

}
