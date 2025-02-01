import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/modules/recipe/interfaces/recipe.interface';

@Component({
  selector: 'app-roulettes',
  standalone: false,
  templateUrl: './roulettes.component.html',
  styleUrl: './roulettes.component.scss'
})
export class RoulettesComponent {
  @Input() roulettes: Recipe;
}
