import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe.interface';
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
export class RecipeService extends CrudService<Recipe> {
	constructor(
		_http: HttpService,
		_store: StoreService,
		_alert: AlertService,
		_core: CoreService
	) {
		super(
			{
				name: 'recipe',
			},
			_http,
			_store,
			_alert,
			_core
		);
	}
}
