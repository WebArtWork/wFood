import { Component, Input } from '@angular/core';
import { Recipeingredient } from 'src/app/modules/recipeingredient/interfaces/recipeingredient.interface';

@Component({
  selector: 'app-ingredients',
  standalone: false,
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.scss'
})
export class IngredientsComponent {
 @Input() ingredients: Recipeingredient;
}
