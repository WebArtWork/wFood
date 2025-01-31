import { Component } from '@angular/core';
import { Recipe } from 'src/app/modules/recipe/interfaces/recipe.interface';
import { RecipeService } from 'src/app/modules/recipe/services/recipe.service';

@Component({
	templateUrl: './myrecipes.component.html',
	styleUrls: ['./myrecipes.component.scss'],
	standalone: false
})
export class MyrecipesComponent {
	get myrecipes(): Recipe[] {
		return this._recipeService.recipes;
	}
	isMenuOpen = false
	constructor(private _recipeService: RecipeService) {}
}