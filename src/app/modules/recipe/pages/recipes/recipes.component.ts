import { Component } from '@angular/core';
import { AlertService, CoreService } from 'wacom';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../interfaces/recipe.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { recipeFormComponents } from '../../formcomponents/recipe.formcomponents';
import { firstValueFrom } from 'rxjs';

@Component({
	templateUrl: './recipes.component.html',
	styleUrls: ['./recipes.component.scss'],
	standalone: false,
})
export class RecipesComponent {
	columns = ['name', 'description'];

	form: FormInterface = this._form.getForm('recipe', recipeFormComponents);

	config = {
		paginate: this.setRows.bind(this),
		perPage: 20,
		setPerPage: this._recipeService.setPerPage.bind(this._recipeService),
		allDocs: false,
		create: (): void => {
			this._form.modal<Recipe>(this.form, {
				label: 'Create',
				click: async (created: unknown, close: () => void) => {
					close();

					this._preCreate(created as Recipe);

					await firstValueFrom(
						this._recipeService.create(created as Recipe)
					);

					this.setRows();
				},
			});
		},
		update: (doc: Recipe): void => {
			this._form
				.modal<Recipe>(this.form, [], doc)
				.then((updated: Recipe) => {
					this._core.copy(updated, doc);

					this._recipeService.update(doc);
				});
		},
		delete: (doc: Recipe): void => {
			this._alert.question({
				text: this._translate.translate(
					'Common.Are you sure you want to delete this recipe?'
				),
				buttons: [
					{
						text: this._translate.translate('Common.No'),
					},
					{
						text: this._translate.translate('Common.Yes'),
						callback: async (): Promise<void> => {
							await firstValueFrom(this._recipeService.delete(doc));

							this.setRows();
						},
					},
				],
			});
		},
		buttons: [
			{
				icon: 'cloud_download',
				click: (doc: Recipe): void => {
					this._form.modalUnique<Recipe>('recipe', 'url', doc);
				},
			},
		],
		headerButtons: [
			{
				icon: 'playlist_add',
				click: this._bulkManagement(),
				class: 'playlist',
			},
			{
				icon: 'edit_note',
				click: this._bulkManagement(false),
				class: 'edit',
			},
		],
	};

	rows: Recipe[] = [];

	constructor(
		private _translate: TranslateService,
		private _recipeService: RecipeService,
		private _alert: AlertService,
		private _form: FormService,
		private _core: CoreService
	) {
		this.setRows();
	}

	setRows(page = this._page): void {
		this._page = page;

		this._core.afterWhile(
			this,
			() => {
				this._recipeService.get({ page }).subscribe((rows) => {
					this.rows.splice(0, this.rows.length);

					this.rows.push(...rows);
				});
			},
			250
		);
	}

	private _page = 1;

	private _bulkManagement(create = true): () => void {
		return (): void => {
			this._form
				.modalDocs<Recipe>(create ? [] : this.rows)
				.then(async (recipes: Recipe[]) => {
					if (create) {
						for (const recipe of recipes) {
							this._preCreate(recipe);

							await firstValueFrom(
								this._recipeService.create(recipe)
							);
						}
					} else {
						for (const recipe of this.rows) {
							if (
								!recipes.find(
									(localRecipe) => localRecipe._id === recipe._id
								)
							) {
								await firstValueFrom(
									this._recipeService.delete(recipe)
								);
							}
						}

						for (const recipe of recipes) {
							const localRecipe = this.rows.find(
								(localRecipe) => localRecipe._id === recipe._id
							);

							if (localRecipe) {
								this._core.copy(recipe, localRecipe);

								await firstValueFrom(
									this._recipeService.update(localRecipe)
								);
							} else {
								this._preCreate(recipe);

								await firstValueFrom(
									this._recipeService.create(recipe)
								);
							}
						}
					}

					this.setRows();
				});
		};
	}

	private _preCreate(recipe: Recipe): void {
		delete recipe.__created;
	}
}
