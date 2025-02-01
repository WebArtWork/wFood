import { Component } from '@angular/core';
import { Recipe } from 'src/app/modules/recipe/interfaces/recipe.interface';
import { RecipeService } from 'src/app/modules/recipe/services/recipe.service';

@Component({
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.scss'],
  standalone: false
})
export class RouletteComponent {
  get roulette(): Recipe[] {
    return this._recipeService.recipes;
  }
  
  isMenuOpen = false;
  randomRecipe: Recipe | null = null; // Додаємо змінну для випадкового рецепта

  constructor(private _recipeService: RecipeService) {
    this.getRandomRecipe(); // Встановлюємо випадковий рецепт при завантаженні
  }

  getRandomRecipe() {
    const recipes = this._recipeService.recipes;
    if (recipes.length) {
      this.randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
    }
  }

  onSwipe(recipe: Recipe) {
    this._recipeService.saveRecipe(recipe);
    this.getRandomRecipe(); // Після свайпу беремо новий випадковий рецепт
  }
}
