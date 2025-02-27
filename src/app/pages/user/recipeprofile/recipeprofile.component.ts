import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Для отримання параметрів з URL
import { RecipeService } from 'src/app/modules/recipe/services/recipe.service'; // Ваш сервіс
import { Recipe } from 'src/app/modules/recipe/interfaces/recipe.interface'; // Ваш інтерфейс
import { RecipeingredientService } from 'src/app/modules/recipeingredient/services/recipeingredient.service';
import { RecipephaseService } from 'src/app/modules/recipephase/services/recipephase.service';

@Component({
  selector: 'app-recipeprofile',
  templateUrl: './recipeprofile.component.html',
  styleUrls: ['./recipeprofile.component.scss'],
  standalone: false
})
export class RecipeprofileComponent implements OnInit {
  recipe: Recipe | null = null; // Поточний рецепт для профілю
  isMenuOpen = false;

  constructor(
    private _recipeService: RecipeService,
    private _route: ActivatedRoute, // Інжекція ActivatedRoute
    public recipeingredientService: RecipeingredientService, 
    public recipephaseService: RecipephaseService 
  ) {}

  ngOnInit(): void {
    const recipeId = this._route.snapshot.paramMap.get('recipeprofile_id'); // Отримуємо параметр з URL
    if (recipeId) {
      this._recipeService.getRecipeById(recipeId).subscribe(recipe => {
        this.recipe = recipe; // Підписуємося на Observable і зберігаємо рецепт
      });
    } else {
      console.log('Recipe ID не знайдено!');
    }
  }
}

