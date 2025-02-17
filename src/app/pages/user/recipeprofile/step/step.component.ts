import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/modules/recipe/interfaces/recipe.interface';
@Component({
  selector: 'app-step',
  standalone: false,

  templateUrl: './step.component.html',
  styleUrl: './step.component.scss'
})
export class StepComponent {
  @Input() step: Recipe;
}
