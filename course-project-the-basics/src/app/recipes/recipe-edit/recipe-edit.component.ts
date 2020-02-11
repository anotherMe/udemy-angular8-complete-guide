import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  private currentRecipe: Recipe;
  private editMode: boolean;

  constructor(private route: ActivatedRoute, 
    private recipeService: RecipeService) { 
      this.editMode = false;
    }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {

        this.currentRecipe = this.recipeService.getRecipe(+params['id']);
        this.editMode = ( params['id'] != null );
      }
    );
  }

}
