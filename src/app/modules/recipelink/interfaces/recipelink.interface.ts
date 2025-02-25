import { CrudDocument } from 'wacom';

export interface Recipelink extends CrudDocument {

	ingredient?:string
	phase?: string;
	recipe: string;

}