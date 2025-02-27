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
	isMenuOpen = false;
	recipe: Recipe;
	form: FormInterface;

	constructor(
		private _recipeService: RecipeService,
		private _form: FormService,
		private _router: Router,
		public recipephaseService: RecipephaseService,
		public recipeingredientService: RecipeingredientService,
		private _recipelinkService: RecipelinkService
	) {
		this.recipe = this._recipeService.new();
		this.recipe.phases = [];
		this.recipe.ingredients = [];
		this.recipe.imageUrl = '';
		this.form = this._form.getForm('recipe', recipeFormComponents);
	}

	onFileSelected(event: Event) {
		const input = event.target as HTMLInputElement;
		if (input.files && input.files.length > 0) {
			const file = input.files[0];
			const reader = new FileReader();
			reader.onload = (e: any) => {
				this.recipe.imageUrl = e.target.result;
			};
			reader.readAsDataURL(file);
		}
	}

	create(): void {
		if (!this.recipe.name || !this.recipe.description || !this.recipe.imageUrl) {
			alert('Заповніть усі поля!');
			return;
		}

		this._recipeService.create(this.recipe).subscribe((createdRecipe) => {
			this.recipe.ingredients.forEach((ingredient) => {
				this._recipelinkService.create({
					id: Date.now(),
					_id: 'some_unique_id_for_recipelink',
					recipe: createdRecipe._id,
					ingredient: ingredient,
					phase: createdRecipe._id,
				});
			});
			this._router.navigate(['/recipes']);
		});
	}

	get phases(): Recipephase[] {
		return this.recipephaseService.recipephases;
	}

	get ingredients(): Recipeingredient[] {
		return this.recipeingredientService.recipeingredients;
	}
}
