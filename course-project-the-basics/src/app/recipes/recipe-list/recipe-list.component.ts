import { Component, OnInit, OnDestroy } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  public recipes: Recipe[] = [];
  private recipeListChangedSubscription: Subscription;

  constructor(private recipeService: RecipeService,
    private router: Router) { }

  ngOnInit() {

    this.recipes = this.recipeService.getList();
    this.recipeListChangedSubscription = this.recipeService
      .recipeListChanged.subscribe( recipes => {
        this.recipes = recipes;
    });
  }

  ngOnDestroy(): void {
    this.recipeListChangedSubscription.unsubscribe();
  }

  onBtnNewRecipe() {
    this.router.navigate(['/recipes', 'new']);
  }

}
