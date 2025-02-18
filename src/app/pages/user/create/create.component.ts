import { Component } from '@angular/core';
import { RecipeingredientService } from 'src/app/modules/recipeingredient/services/recipeingredient.service';
import { Recipeingredient } from 'src/app/modules/recipeingredient/interfaces/recipeingredient.interface';
import { Recipe } from 'src/app/modules/recipe/interfaces/recipe.interface';
import { Recipephase } from 'src/app/modules/recipephase/interfaces/recipephase.interface';
import { RecipephaseService } from 'src/app/modules/recipephase/services/recipephase.service';

@Component({
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.scss'],
	standalone: false,
})
export class CreateComponent {
	recipe: Recipe = {} as Recipe;

	addIngredient(ingredients: string) {
		this.recipe.ingredients.push(ingredients);
	}


	get create(): Recipeingredient[] {
			return this._recipeingredientServise.recipeingredients;
		}
		isMenuOpen = false
		constructor(private _recipeingredientServise: RecipeingredientService) {}
	
}
export class CreatesComponent {
    recip: Recipe = {} as Recipe;

	addPhases(phases: string) {
		this.recip.phases.push(phases);
	}

	get create(): Recipephase[] {
		return this._recipephaseServise.recipephases;
	}
	isMenuOpen = false
	constructor(private _recipephaseServise: RecipephaseService) {}
}