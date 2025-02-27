import { CrudDocument } from 'wacom';

export interface Recipelink extends CrudDocument {
	id: number; 
	_id: string;
	recipe: string;
	ingredient: string;
	phase: string;
}