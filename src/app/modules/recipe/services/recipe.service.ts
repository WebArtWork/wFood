import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Recipe } from '../interfaces/recipe.interface';
import {
	AlertService,
	CoreService,
	HttpService,
	StoreService,
	CrudService
} from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class RecipeService extends CrudService<Recipe> {
	
	recipes: Recipe[] = this.getDocs();
	recipesByAuthor: Record<string, Recipe[]> = {};
	recipesSaved: Recipe[] = []; // Масив для збережених рецептів

	constructor(
		_http: HttpService,
		_store: StoreService,
		_alert: AlertService,
		_core: CoreService
	) {
		super(
			{
				name: 'recipe',
			},
			_http,
			_store,
			_alert,
			_core
		);

		this.get();
		this.filteredDocuments(this.recipesByAuthor);
	}

	// Збереження рецепта (не змінюємо)
	saveRecipe(recipe: Recipe) {
		if (!this.recipesSaved.find(r => r._id === recipe._id)) {
			this.recipesSaved.push(recipe);
			console.log('Recipe saved:', recipe);
		}
	}

	// Отримати рецепт за ID
	getRecipeById(id: string): Recipe | undefined {
		return this.recipes.find(recipe => recipe._id === id);
	}

	// Оновити рецепт
	updateRecipe(id: string, updatedRecipe: Recipe): void {
		const index = this.recipes.findIndex(recipe => recipe._id === id);
		if (index !== -1) {
			this.recipes[index] = updatedRecipe;
			console.log('Recipe updated:', updatedRecipe);
		}
	}

}