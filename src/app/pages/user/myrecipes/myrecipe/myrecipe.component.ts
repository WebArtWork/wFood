import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/modules/recipe/interfaces/recipe.interface';

@Component({
  selector: 'app-myrecipe',
  standalone: false,
  templateUrl: './myrecipe.component.html',
  styleUrl: './myrecipe.component.scss'
})
export class MyrecipeComponent {
  @Input() myrecipe: Recipe;
}
