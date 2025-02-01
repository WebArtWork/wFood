import { Injectable } from '@angular/core';
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
	recipesSaved: Recipe[] = []; // Масив для збережених рецептів

saveRecipe(recipe: Recipe) {
  if (!this.recipesSaved.find(r => r._id === recipe._id)) {
    this.recipesSaved.push(recipe);
    console.log('Recipe saved:', recipe);
  }
}
// У твоєму RecipeService додай наступний метод для видалення рецепту

removeRecipe(recipe: Recipe): void {
	const index = this.recipes.findIndex(r => r.id === recipe.id);
	if (index !== -1) {
	  this.recipes.splice(index, 1); // Видаляємо рецепт зі списку
	}
  }
  
}