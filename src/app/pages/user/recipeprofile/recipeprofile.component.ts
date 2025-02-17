import { Component } from '@angular/core';
import { Recipe } from 'src/app/modules/recipe/interfaces/recipe.interface';
import { RecipeService } from 'src/app/modules/recipe/services/recipe.service';
@Component({
	selector: 'app-recipeprofile',
	templateUrl: './recipeprofile.component.html',
	styleUrls: ['./recipeprofile.component.scss'],
	standalone: false
})
export class RecipeprofileComponent {
	get recipeprofile(): Recipe[] {
		return this._recipeService.recipes;
	}
	isMenuOpen = false
	constructor(private _recipeService: RecipeService) { }
}
