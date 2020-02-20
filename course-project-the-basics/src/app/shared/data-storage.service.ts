import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class DataStorageService {

    constructor(private http: HttpClient, private recipeService: RecipeService) {
    }

    storeRecipes() {
        const recipes = this.recipeService.getList();
        console.log(recipes);
        this.http
            .put('https://udemy-course-project-def1d.firebaseio.com/recipes.json', recipes)
            .subscribe( response => {
                // console.log(response);
            });
    }

    fetchRecipes() {
        this.http
        .get<Recipe[]>('https://udemy-course-project-def1d.firebaseio.com/recipes.json')
        .pipe(map(response => {
            return response.map( recipe => {
                
                // re-add the array property if Firebase has removed it
                if (!recipe.ingredients) {
                    recipe.ingredients = [];
                }

                return recipe;
            })
        }))
        .subscribe( response => {
            this.recipeService.setRecipes(response);
        });
    }
}