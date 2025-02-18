import { Component, Input, input } from '@angular/core';
import { Recipephase } from 'src/app/modules/recipephase/interfaces/recipephase.interface';

@Component({
  selector: 'app-phases',
  standalone: false,
  templateUrl: './phases.component.html',
  styleUrl: './phases.component.scss'
})
export class PhasesComponent {
 @Input() phases: Recipephase;
}
