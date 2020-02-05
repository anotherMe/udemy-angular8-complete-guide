import {
    Component,
    OnInit,
    ViewChild,
    Output,
    EventEmitter,
    ElementRef
  } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;
  @Output() newIngredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onBtnAdd() {
    console.log("Add");
    this.newIngredientAdded.emit(new Ingredient(this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value));
  }

  onBtnDelete() {
    console.log("Delete");
  }

  onBtnClear() {
    console.log("Clear");
  }

}
