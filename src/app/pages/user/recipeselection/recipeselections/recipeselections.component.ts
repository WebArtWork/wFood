import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/modules/recipe/interfaces/recipe.interface';

@Component({
  selector: 'app-recipeselections',
  standalone: false,
  templateUrl: './recipeselections.component.html',
  styleUrl: './recipeselections.component.scss'
})
export class RecipeselectionsComponent {
  @Input() recipeselections: Recipe;
}
