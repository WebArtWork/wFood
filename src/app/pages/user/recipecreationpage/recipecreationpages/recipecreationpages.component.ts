import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/modules/recipe/interfaces/recipe.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import {recipeFormComponents} from 'src/app/modules/recipe/formcomponents/recipe.formcomponents';
import { RecipeService } from 'src/app/modules/recipe/services/recipe.service';
import { AlertService, CoreService } from 'wacom';
@Component({
  selector: 'app-recipecreationpages',
  standalone: false,
  templateUrl: './recipecreationpages.component.html',
  styleUrl: './recipecreationpages.component.scss'
})
export class RecipecreationpagesComponent{
  @Input() recipecreationpages: Recipe;

	constructor(
			private _translate: TranslateService,
			private _recipeService: RecipeService,
			private _alert: AlertService,
			private _form: FormService,
			private _core: CoreService
		) {}

		form: FormInterface = this._form.getForm('recipe', recipeFormComponents);

		update (doc: Recipe): void  {
			this._form
				.modal<Recipe>(this.form, [], doc)
				.then((updated: Recipe) => {
					this._core.copy(updated, doc);

					this._recipeService.update(doc);
				});
		}

		delete (doc: Recipe): void  {
			this._alert.question({
				text: this._translate.translate(
					'Common.Are you sure you want to delete this recipe?'
				),
				buttons: [
					{
						text: this._translate.translate('Common.No')
					},
					{
						text: this._translate.translate('Common.Yes'),
						callback: (): void => {
							this._recipeService.delete(doc);
						}
					}
				]
			});


}
}