import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/modules/recipe/interfaces/recipe.interface';
@Component({
  selector: 'app-ingredient',
  standalone: false,

  templateUrl: './ingredient.component.html',
  styleUrl: './ingredient.component.scss'
})
export class IngredientComponent {
  @Input() ingredient: Recipe;
}
