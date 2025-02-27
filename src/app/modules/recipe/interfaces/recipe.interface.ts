import { CrudDocument } from 'wacom';

export interface Recipe extends CrudDocument {
  id: string;  
  name: string;        
  description: string; 
  ingredients: string[]; 
  phases: string[]; 
  imageUrl: string;
  _id: string;  
}