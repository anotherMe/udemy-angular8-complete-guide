import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {

    constructor(private http: HttpClient, private recipeService: RecipeService) {

    }

    storeRecipes() {
        const recipes = this.recipeService.getList();
        this.http
            .put('https://udemy-course-project-def1d.firebaseio.com/recipes.json', recipes)
            .subscribe( response => {
                // console.log(response);
            });
    }

    fetchRecipes() {
        this.http
        .get('https://udemy-course-project-def1d.firebaseio.com/recipes.json')
        .subscribe( response => {
            this.recipeService.setRecipes(response as Recipe[]);
        });
    }
}