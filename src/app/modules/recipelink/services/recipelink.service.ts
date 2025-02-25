import { Injectable } from '@angular/core';
import { Recipelink } from '../interfaces/recipelink.interface';
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
export class RecipelinkService extends CrudService<Recipelink> {
	recipephases: Recipelink[] = this.getDocs();
	recipesByAuthor: Record<string, Recipelink[]> = {};
	constructor(
		_http: HttpService,
		_store: StoreService,
		_alert: AlertService,
		_core: CoreService
	) {
		super({
			name: 'recipelink',
		},
		_http,
		_store,
		_alert,
		_core
	);
		this.get();
		this.filteredDocuments(this.recipesByAuthor);
	}
}




	