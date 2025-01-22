import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { RecipeingredientService } from '../../services/recipeingredient.service';
import { Recipeingredient } from '../../interfaces/recipeingredient.interface';

@Component({
	selector: 'recipeingredient-selector',
	templateUrl: './recipeingredient-selector.component.html',
	styleUrls: ['./recipeingredient-selector.component.scss'],
	imports: [SelectModule]
})
export class SelectUserComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Recipeingredient[] {
		return this._recipeingredientService.recipeingredients;
	}

	constructor(private _recipeingredientService: RecipeingredientService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
