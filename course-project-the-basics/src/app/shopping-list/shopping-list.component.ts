import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Guanciale', '70g'),
    new Ingredient('Salsa pomodoro', 'qb')
  ];

  constructor() {

  }

  ngOnInit() {
  }

  addIngredient(ing) {
    this.ingredients.push(ing);
  }

}
