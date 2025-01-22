import { CrudDocument } from 'wacom';

export interface Recipephase extends CrudDocument {
	name: string;
	description: string;
}
