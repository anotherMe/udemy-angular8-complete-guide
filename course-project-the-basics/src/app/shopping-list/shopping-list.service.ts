
import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();
  indexOfCurrentlyEditingIngredient = new Subject<number>();

  ingredients: Ingredient[] = [
    new Ingredient('Guanciale', '70g'),
    new Ingredient('Salsa pomodoro', 'qb')
  ];

  constructor() { }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }
  
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredient(ing: Ingredient) {

    this.ingredients.push(ing);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  appendIngredients(ings: Ingredient[]) {
    ings.map( (ing) => { this.ingredients.push()});
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateListIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}

