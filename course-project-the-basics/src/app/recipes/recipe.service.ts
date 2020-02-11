
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

  private currentRecipe: Recipe
  private recipes: Recipe[] = [

    new Recipe(1, 'Spaghetti alla carbonara', 'Prendi gli spaghetti, sbatti le uova',
    'https://upload.wikimedia.org/wikipedia/commons/2/20/Spaghetti_alla_carbonara_%2832998643591%29.jpg',
      [new Ingredient('guanciale', '50g'), new Ingredient('uova', '8'), new Ingredient('pepe', 'qb')]),

    new Recipe(2, 'Bucatini all\'amatriciana', 'Prendi i bucatini, soffriggi il guanciale',
    'https://www.donnamoderna.com/wp-content/uploads/2014/09/Bucatini-all-amatriciana-725x545.jpg',
      [new Ingredient('guanciale', '50g'), new Ingredient('salsa di pomodoro', '250g'), new Ingredient('pepe', 'qb')])
  ];

  getList() {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {

    return this.recipes.find((recipe) => {
      if (recipe.id === id) {
        return recipe;
      }
    });
  }

  getCurrentRecipe(): Recipe {
    return this.currentRecipe;
  }

}
