
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class RecipeService {

  private currentRecipe: Recipe
  private recipes: Recipe[];
  recipeListChanged = new Subject<Recipe[]>();

  constructor() {

    this.recipes = [

      new Recipe(1, 'Spaghetti alla carbonara', 'Prendi gli spaghetti, sbatti le uova',
      'https://upload.wikimedia.org/wikipedia/commons/2/20/Spaghetti_alla_carbonara_%2832998643591%29.jpg',
        [new Ingredient('guanciale', '50g'), new Ingredient('uova', '8'), new Ingredient('pepe', 'qb')]),
  
      new Recipe(2, 'Bucatini all\'amatriciana', 'Prendi i bucatini, soffriggi il guanciale',
      'https://www.donnamoderna.com/wp-content/uploads/2014/09/Bucatini-all-amatriciana-725x545.jpg',
        [new Ingredient('guanciale', '50g'), new Ingredient('salsa di pomodoro', '250g'), new Ingredient('pepe', 'qb')])
  
    ];

  }

  getList() {
    return this.recipes.slice();
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeListChanged.next(this.recipes);
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

  saveRecipe(recipe: Recipe) {

    console.log(recipe);

    if (recipe.id === 0) { // it's a new recipe

      recipe.id = this.getNextId();
      this.recipes.push(recipe);

    } else { // update an existing recipe

      for (let idx = 0; idx < this.recipes.length; idx++) {
        if (this.recipes[idx].id == recipe.id) 
          this.recipes[idx] = recipe; // replace the recipe at given position
      }
    }
    
    this.recipeListChanged.next(this.recipes);
  }

  deleteRecipe(id: number) {

    for (let idx = 0; idx < this.recipes.length; idx++) {
      if (this.recipes[idx].id == id) 
        this.recipes.splice(idx, 1);
    }

    this.recipeListChanged.next(this.recipes);
  }

  private getNextId():number {

    // get all the recipes' IDs in an array
    let idArray = this.recipes.map( r => {
      return r.id;
    });

    // retrieve the max ID
    let maxId = 1;
    idArray.map( x => {
      if (x > maxId)
        maxId = x;
    });

    // add 1 to the max ID and return it
    return ++maxId;
  }

}
