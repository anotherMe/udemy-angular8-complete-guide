
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private ingredientsChangedSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {

    this.ingredients = this.shoppingListService.getIngredients();

    this.ingredientsChangedSubscription = this.shoppingListService.ingredientsChanged.subscribe({

      next: (ingredients: Ingredient[]) => {
        console.log("ShoppingListComponent: new ingredient added");
        this.ingredients = ingredients.slice();
      },

      error: () => { console.log("ShoppingListComponent: error !"); },
      
      complete: () => { console.log("ShoppingListComponent: complete"); }
    });

  }

  ngOnDestroy() {
    this.ingredientsChangedSubscription.unsubscribe();
  }

  onEditItem(ingredientListIndex: number) {

    this.shoppingListService
      .indexOfCurrentlyEditingIngredient.next(ingredientListIndex);
  }
}
