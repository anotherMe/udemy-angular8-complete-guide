
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {

  public ingredients: Ingredient[] = [
    new Ingredient('Guanciale', '70g'),
    new Ingredient('Salsa pomodoro', 'qb')
  ];

  constructor() { }

  public addIngredient(ing: Ingredient) {
    this.ingredients.push(ing);
  }

  public appendIngredients(ings: Ingredient[]) {
    ings.map( (ing) => { this.ingredients.push()})
  }
}
