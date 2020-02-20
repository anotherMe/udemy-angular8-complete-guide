import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  private currentRecipe: Recipe;
  private recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute, 
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
        if (params['id']) {
          this.currentRecipe = this.recipeService.getRecipe(+params['id']);
        } else { // we are editing a NEW recipe
          this.currentRecipe = new Recipe(0, 'A new recipe', '', '', []);
        }
      }
    );

    this.initForm();
  }

  private getNewIngredientFormGroup(name: string, amount: string):FormGroup {

    return new FormGroup({
      'name': new FormControl(name, Validators.required),
      'amount': new FormControl(amount, Validators.required)
    });
  }

  private initForm() {

    // create recipe form
    this.recipeForm = new FormGroup({
      'name': new FormControl(this.currentRecipe.name, Validators.required),
      'description': new FormControl(this.currentRecipe.description, Validators.required),
      'imagePath': new FormControl(this.currentRecipe.imagePath, Validators.required),
      'ingredients': new FormArray([])
    });

    // add ingredients to recipe form
    for (const ingredient of this.currentRecipe.ingredients) {

      const fg = this.getNewIngredientFormGroup(ingredient.name, ingredient.amount);
      (<FormArray>this.recipeForm.get('ingredients')).push(fg);
    }

  }

  onSubmit() {
    throw new Error('Not implemented');
  }

  onEditCancel() {
    this.router.navigate(['recipes']);
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onAddIngredient() {

    const fgNewIngredient = this.getNewIngredientFormGroup(null, null);
    (this.recipeForm.get('ingredients') as FormArray).push(fgNewIngredient);
  }
}
