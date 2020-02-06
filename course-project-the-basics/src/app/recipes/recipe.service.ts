import { Recipe } from './recipe.model';

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Spaghetti alla carbonara', 'Prendi gli spaghetti, sbatti le uova',
    'https://upload.wikimedia.org/wikipedia/commons/2/20/Spaghetti_alla_carbonara_%2832998643591%29.jpg'),
    new Recipe('Bucatini all\'amatriciana', 'Prendi i bucatini, soffriggi il guanciale',
    'https://www.donnamoderna.com/wp-content/uploads/2014/09/Bucatini-all-amatriciana-725x545.jpg')
  ];

  constructor() { }

  getList() {
    return this.recipes.slice();
  }

}
