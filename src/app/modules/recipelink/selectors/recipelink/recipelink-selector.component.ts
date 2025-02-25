import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input,
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { RecipelinkService } from '../../services/recipelink.service';
import { Recipelink } from '../../interfaces/recipelink.interface';

@Component({
	selector: 'recipelink-selector',
	templateUrl: './recipelink-selector.component.html',
	styleUrls: ['./recipelink-selector.component.scss'],
	imports: [SelectModule],
})
export class RecipelinkSelectorComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Recipelink[] {
		return this._recipelinkService.recipelinks;
	}

	constructor(private _recipelinkService: RecipelinkService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
