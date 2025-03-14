import { CrudDocument } from 'wacom';

export interface Recipephase extends CrudDocument {
	name: string;
	description: string;
	recipe: string;
	_id: string;
	order: number;
}
  