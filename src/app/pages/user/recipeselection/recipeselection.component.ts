import { Component } from '@angular/core';
import { Recipe } from 'src/app/modules/recipe/interfaces/recipe.interface';
import { RecipeService } from 'src/app/modules/recipe/services/recipe.service';

@Component({
  templateUrl: './recipeselection.component.html',
  styleUrls: ['./recipeselection.component.scss'],
  standalone: false
})
export class RecipeSelectionComponent {
  randomRecipe: Recipe | null = null;

  constructor(private _recipeService: RecipeService) {
    this.getRandomRecipe(); // Встановлюємо випадковий рецепт при завантаженні
  }

  getRandomRecipe() {
    const recipes = this._recipeService.recipes;
    if (recipes.length) {
      this.randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
    }
  }

  onSwipe(recipe: Recipe | null, action: 'like' | 'dislike') {
    if (!recipe) return; // Якщо немає рецепта, нічого не робимо
    if (action === 'like') {
      this._recipeService.saveRecipe(recipe); // Додати до "Мої рецепти"
    } else {
       // Відхилити рецепт
    }
    this.getRandomRecipe(); // Після свайпу отримуємо новий рецепт
  }
}
