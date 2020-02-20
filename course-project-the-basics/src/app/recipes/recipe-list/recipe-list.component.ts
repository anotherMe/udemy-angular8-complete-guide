import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  public recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService,
    private router: Router) { }

  ngOnInit() {
    this.recipes = this.recipeService.getList();

    this.recipeService.recipeListChanged.subscribe( recipes => {
      this.recipes = recipes;
    });
  }

  onBtnNewRecipe() {
    this.router.navigate(['/recipes', 'new']);
  }

}
