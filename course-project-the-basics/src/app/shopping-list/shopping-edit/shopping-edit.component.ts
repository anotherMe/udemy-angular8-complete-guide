import {
    Component,
    OnInit,
    OnDestroy,
    ViewChild
  } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f', {static: false}) slForm: NgForm;
  currentlyEditingIngredientIndex: number;
  isEditing:boolean = false;
  indexSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {

    this.indexSubscription = this.shoppingListService
       .indexOfCurrentlyEditingIngredient
      .subscribe( index => {
          this.isEditing = true;
          this.currentlyEditingIngredientIndex = index;
          let currentlyEditingIngredient: Ingredient = this.shoppingListService.getIngredient(index);
          this.slForm.controls['name'].setValue(currentlyEditingIngredient.name);
          this.slForm.controls['amount'].setValue(currentlyEditingIngredient.amount);
    });
  }

  ngOnDestroy(): void {
    this.indexSubscription.unsubscribe();
  }

  onSubmit(form: NgForm) {

    this.shoppingListService
      .addIngredient(
        new Ingredient(
          form.value.name, 
          form.value.amount
        )
    );

  }

  onBtnDelete() {
    
    if (!confirm('Are you positively sure ?'))
      return;

    this.shoppingListService.deleteIngredient(this.currentlyEditingIngredientIndex);
    this.cancelEditing();
  }

  onBtnClear() {
    this.slForm.reset();
  }

  onEditCancel() {
    this.cancelEditing();
  }

  onEditSave() {

    let i = new Ingredient(
      this.slForm.controls['name'].value, 
      this.slForm.controls['amount'].value
    );

    this.shoppingListService.updateListIngredient(
      this.currentlyEditingIngredientIndex, i);

    this.cancelEditing();
  }

  private cancelEditing() {
    this.slForm.reset();
    this.currentlyEditingIngredientIndex = null;
    this.isEditing = false;
  }
}
