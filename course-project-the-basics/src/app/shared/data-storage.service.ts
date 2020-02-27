import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';


@Injectable({
    providedIn: 'root'
})
export class DataStorageService {

    constructor(
        private http: HttpClient, 
        private recipeService: RecipeService, 
        private authService: AuthService        
    ) {

    }

    storeRecipes() {
        const recipes = this.recipeService.getList();
        console.log(recipes);
        this.http
            .put('https://udemy-course-project-def1d.firebaseio.com/recipes.json', recipes)
            .subscribe( response => {
                console.log(response);
            });
    }

    fetchRecipes() {

        // See Udemy - Angular Complete Guide, lesson 300
    
        return this.http
        .get<Recipe[]>('https://udemy-course-project-def1d.firebaseio.com/recipes.json')
        .pipe(

            map(recipes => {

                return recipes.map( recipe => {
                    
                    // re-add the array property if Firebase has removed it
                    if (!recipe.ingredients) {
                        recipe.ingredients = [];
                    }

                    return recipe;
                })

            }), tap(recipes => { // this is a sort of hack in order to be able to return an Observable, which could be possibly used by our RecipesResolverService

                this.recipeService.setRecipes(recipes);

            })
    
        );
    }
}