
import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {

  // ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredientsChanged = new Subject<Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient('Guanciale', '70g'),
    new Ingredient('Salsa pomodoro', 'qb')
  ];

  constructor() { }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ing: Ingredient) {

    this.ingredients.push(ing);
    // this.ingredientsChanged.emit(this.ingredients.slice());
    this.ingredientsChanged.next(this.ingredients.slice()); // every time a new ingredient is added, we notify the subscribers
  }

  appendIngredients(ings: Ingredient[]) {
    ings.map( (ing) => { this.ingredients.push()});
  }
}

