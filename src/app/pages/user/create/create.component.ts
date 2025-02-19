import { Component } from '@angular/core';
import { RecipeingredientService } from 'src/app/modules/recipeingredient/services/recipeingredient.service';
import { Recipeingredient } from 'src/app/modules/recipeingredient/interfaces/recipeingredient.interface';
import { Recipe } from 'src/app/modules/recipe/interfaces/recipe.interface';
import { Recipephase } from 'src/app/modules/recipephase/interfaces/recipephase.interface';
import { RecipephaseService } from 'src/app/modules/recipephase/services/recipephase.service';
import { RecipeService } from 'src/app/modules/recipe/services/recipe.service';
@Component({
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.scss'],
	standalone: false,
})
export class CreateComponent {
	recipe: Recipe = this._recipeServise.new();
	addIngredient(ingredients: string) {
		this.recipe.ingredients.push(ingredients);
	}
	addPhase(phases: string) {
		this.recipe.phases.push(phases);
	}
	get phases(): Recipephase[] {
		return this._recipephaseServise.recipephases;
	}
	get ingredients(): Recipeingredient[] {
		return this._recipeingredientService.recipeingredients;
	}
	isMenuOpen = false
	constructor(public recipephaseService: RecipephaseService,
		public recipeingredientService: RecipeingredientService,
		private _recipeingredientService: RecipeingredientService,
		private _recipephaseServise: RecipephaseService,
		private _recipeServise: RecipeService) { this.recipe.phases = [], this.recipe.ingredients = [] }
}