import { Component } from '@angular/core';
import { Recipe } from 'src/app/modules/recipe/interfaces/recipe.interface';
import { RecipeService } from 'src/app/modules/recipe/services/recipe.service';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { recipeFormComponents } from 'src/app/modules/recipe/formcomponents/recipe.formcomponents';
import { Router } from '@angular/router';

@Component({
	templateUrl: './recipecreationpage.component.html',
	styleUrls: ['./recipecreationpage.component.scss'],
	standalone: false
})
export class RecipecreationpageComponent {
	get recipecreationpage(): Recipe[] {
		return this._recipeService.recipes;
	}
	form: FormInterface = this._form.getForm('recipe', recipeFormComponents);
	isMenuOpen = false;
	constructor(
		private _recipeService: RecipeService,
		private _form: FormService,
		private _router: Router,) { }
	create(): void {
		this._form.modal<Recipe>(this.form, {
			label: 'Create',
			click: (created: unknown, close: () => void) => {
				this._recipeService.create(created as Recipe).subscribe((recipecreationpages) => {
					close();
					this._router.navigate(['/recipeprofile', recipecreationpages._id]);
				});
			}
		})
	}
}