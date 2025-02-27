import { CrudDocument } from 'wacom';

export interface Recipeingredient extends CrudDocument {
	name: string;
	description: string;
	recipe: string;
	_id: string;
	quantity: string;
}
