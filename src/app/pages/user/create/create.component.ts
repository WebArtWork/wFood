import { Component } from '@angular/core';
import { RecipeingredientService } from 'src/app/modules/recipeingredient/services/recipeingredient.service';
import { Recipeingredient } from 'src/app/modules/recipeingredient/interfaces/recipeingredient.interface';
import { Recipe } from 'src/app/modules/recipe/interfaces/recipe.interface';
import { Recipephase } from 'src/app/modules/recipephase/interfaces/recipephase.interface';
import { RecipephaseService } from 'src/app/modules/recipephase/services/recipephase.service';
import { RecipeService } from 'src/app/modules/recipe/services/recipe.service';
import { Router } from '@angular/router';
import { FormService } from 'src/app/core/modules/form/form.service';
import { recipeFormComponents } from 'src/app/modules/recipe/formcomponents/recipe.formcomponents';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { RecipelinkService } from 'src/app/modules/recipelink/services/recipelink.service';
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
	get recipecreationpage(): Recipe[] {
		return this._recipeService.recipes;
	}
	form: FormInterface = this._form.getForm('recipe', recipeFormComponents);
	isMenuOpen = false
	constructor(private _recipeService: RecipeService,
		private _form: FormService,
		private _router: Router,
		public recipephaseService: RecipephaseService,
		public recipeingredientService: RecipeingredientService,
		private _recipelinkService: RecipelinkService,
		private _recipeingredientService: RecipeingredientService,
		private _recipephaseServise: RecipephaseService,
		private _recipeServise: RecipeService) { this.recipe.phases = [], this.recipe.ingredients = [] }
		
		create(): void {
			this._recipeService.create(this.recipe).subscribe((create) => {
			
				for (const ingredient of this.recipe.ingredients) {
					this._recipelinkService.create({
						_id: 'some_unique_id_for_recipelink', 
						recipe:create._id,
						ingredient:create._id, 
						phase:create._id
					 });
				}
			});
		}
}