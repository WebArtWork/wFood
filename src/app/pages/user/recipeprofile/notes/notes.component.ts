import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/modules/recipe/interfaces/recipe.interface';

@Component({
  selector: 'app-notes',
  standalone: false,

  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {
  @Input() notes: Recipe;
}
