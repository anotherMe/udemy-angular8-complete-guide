import {
    Component,
    OnInit,
    ViewChild,
    ElementRef
  } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
  }

  onBtnAdd() {
    console.log("Add");
    this.shoppingListService.addIngredient(new Ingredient(this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value));
  }

  onBtnDelete() {
    console.log("Delete");
  }

  onBtnClear() {
    console.log("Clear");
  }

}
