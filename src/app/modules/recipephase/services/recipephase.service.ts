import { Injectable } from '@angular/core';
import { Recipephase } from '../interfaces/recipephase.interface';
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
export class RecipephaseService extends CrudService<Recipephase> {
	constructor(
		_http: HttpService,
		_store: StoreService,
		_alert: AlertService,
		_core: CoreService
	) {
		super(
			{
				name: 'recipephase',
			},
			_http,
			_store,
			_alert,
			_core
		);
	}
}
