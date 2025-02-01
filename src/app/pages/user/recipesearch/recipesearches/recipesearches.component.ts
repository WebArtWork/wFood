import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/modules/recipe/interfaces/recipe.interface';

@Component({
  selector: 'app-recipesearches',
  standalone: false,
  templateUrl: './recipesearches.component.html',
  styleUrl: './recipesearches.component.scss'
})
export class RecipesearchesComponent {
  @Input() recipesearches: Recipe;
}
