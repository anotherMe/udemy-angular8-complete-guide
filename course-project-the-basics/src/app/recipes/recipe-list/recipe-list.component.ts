import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[] = [
      new Recipe('Spaghetti alla carbonara', 'Prendi gli spaghetti, sbatti le uova',
      'https://upload.wikimedia.org/wikipedia/commons/2/20/Spaghetti_alla_carbonara_%2832998643591%29.jpg'),
      new Recipe('Bucatini all\'amatriciana', 'Prendi i bucatini, soffriggi il guanciale',
      'https://www.donnamoderna.com/wp-content/uploads/2014/09/Bucatini-all-amatriciana-725x545.jpg')
    ];

  constructor() { }

  ngOnInit() {
  }

}
