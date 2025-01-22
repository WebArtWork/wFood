import { Injectable } from '@angular/core';
import { Recipeingredient } from '../interfaces/recipeingredient.interface';
import {
	AlertService,
	CoreService,
	HttpService,
	StoreService,
	CrudService
} from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class RecipeingredientService extends CrudService<Recipeingredient> {
	constructor(
		_http: HttpService,
		_store: StoreService,
		_alert: AlertService,
		_core: CoreService
	) {
		super(
			{
				name: 'recipeingredient',
			},
			_http,
			_store,
			_alert,
			_core
		);
	}
}
