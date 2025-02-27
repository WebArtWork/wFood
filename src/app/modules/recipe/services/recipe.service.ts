import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe.interface';
import { Observable, of } from 'rxjs';
import { Recipeingredient } from 'src/app/modules/recipeingredient/interfaces/recipeingredient.interface';  // Імпортуйте правильний тип
import { Recipephase } from '../../recipephase/interfaces/recipephase.interface';  // Імпортуйте правильний тип
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
  
  ingredients: Recipeingredient[] = [];  // Замінили Ingredient на Recipeingredient
  phases: Recipephase[] = [];  // Замінили Phase на Recipephase
  
  recipes: Recipe[] = this.getDocs();
  recipesByAuthor: Record<string, Recipe[]> = {};
  recipesSaved: Recipe[] = [];
  currentRecipe: Recipe | null = null;

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

  saveRecipe(recipe: Recipe) {
    if (!this.recipesSaved.find(r => r._id === recipe._id)) {
      this.recipesSaved.push(recipe);
      console.log('Recipe saved:', recipe);
    }
  }

  //getRecipeById(id: string): Recipe | undefined {
   // return this.recipes.find(recipe => recipe._id === id);
  //}
  getRecipeById(id: string): Observable<Recipe> {
    const recipe: Recipe = {
      id: id,
      name: 'Тестовий рецепт',
      description: 'Це опис тестового рецепту',
      ingredients: ['Інгредієнт 1', 'Інгредієнт 2'],
      phases: ['Фаза 1', 'Фаза 2'],
      imageUrl: 'path/to/image.jpg',  // Додаємо значення для imageUrl
      _id: id                        // Додаємо значення для _id
    };
    return of(recipe);
  }
  updateRecipe(id: string, updatedRecipe: Recipe): void {
    const index = this.recipes.findIndex(recipe => recipe._id === id);
    if (index !== -1) {
      this.recipes[index] = updatedRecipe;
      console.log('Recipe updated:', updatedRecipe);
    }
  }
  getIngredientById(id: string) {
    return this.ingredients.find(ingredient => ingredient._id === id);  // Використовуємо Recipeingredient
  }

  getPhaseById(id: string) {
    return this.phases.find(phase => phase._id === id);  // Використовуємо Recipephase
  }
}