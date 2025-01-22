import { CrudDocument } from 'wacom';

export interface Recipe extends CrudDocument {
	name: string;
	description: string;
}
