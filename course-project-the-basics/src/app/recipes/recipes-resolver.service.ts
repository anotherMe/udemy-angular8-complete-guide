
import { Resolve } from '@angular/router';
import { Recipe } from './recipe.model';
import { Observable } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { Injectable } from '@angular/core';

/**
 * WARNING: My code seemed to work ok event without this resolver added.
 * So this class is currently not used
 */

@Injectable({
    providedIn: 'root'
})
export class RecipesResolverService implements Resolve<Recipe[]> {

    constructor (private dataStorageService: DataStorageService) {}

    resolve(route: import("@angular/router").ActivatedRouteSnapshot, 
            state: import("@angular/router").RouterStateSnapshot
        ): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {

        return this.dataStorageService.fetchRecipes();
    }

}