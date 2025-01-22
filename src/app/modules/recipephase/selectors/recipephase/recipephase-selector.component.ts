import {
	SimpleChanges,
	EventEmitter,
	Component,
	OnChanges,
	Output,
	Input
} from '@angular/core';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { RecipephaseService } from '../../services/recipephase.service';
import { Recipephase } from '../../interfaces/recipephase.interface';

@Component({
	selector: 'recipephase-selector',
	templateUrl: './recipephase-selector.component.html',
	styleUrls: ['./recipephase-selector.component.scss'],
	imports: [SelectModule]
})
export class SelectUserComponent implements OnChanges {
	@Input() value: string;

	@Output() wChange = new EventEmitter();

	get items(): Recipephase[] {
		return this._recipephaseService.recipephases;
	}

	constructor(private _recipephaseService: RecipephaseService) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes['value'] && !changes['value'].firstChange) {
			this.value = changes['value'].currentValue;
		}
	}
}
