import { Component } from '@angular/core';
import { AlertService, CoreService } from 'wacom';
import { RecipeingredientService } from '../../services/recipeingredient.service';
import { Recipeingredient } from '../../interfaces/recipeingredient.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { recipeingredientFormComponents } from '../../formcomponents/recipeingredient.formcomponents';
import { firstValueFrom } from 'rxjs';

@Component({
	templateUrl: './recipeingredients.component.html',
	styleUrls: ['./recipeingredients.component.scss'],
	standalone: false,
})
export class RecipeingredientsComponent {
	columns = ['name', 'description'];

	form: FormInterface = this._form.getForm('recipeingredient', recipeingredientFormComponents);

	config = {
		paginate: this.setRows.bind(this),
		perPage: 20,
		setPerPage: this._recipeingredientService.setPerPage.bind(this._recipeingredientService),
		allDocs: false,
		create: (): void => {
			this._form.modal<Recipeingredient>(this.form, {
				label: 'Create',
				click: async (created: unknown, close: () => void) => {
					close();

					this._preCreate(created as Recipeingredient);

					await firstValueFrom(
						this._recipeingredientService.create(created as Recipeingredient)
					);

					this.setRows();
				},
			});
		},
		update: (doc: Recipeingredient): void => {
			this._form
				.modal<Recipeingredient>(this.form, [], doc)
				.then((updated: Recipeingredient) => {
					this._core.copy(updated, doc);

					this._recipeingredientService.update(doc);
				});
		},
		delete: (doc: Recipeingredient): void => {
			this._alert.question({
				text: this._translate.translate(
					'Common.Are you sure you want to delete this recipeingredient?'
				),
				buttons: [
					{
						text: this._translate.translate('Common.No'),
					},
					{
						text: this._translate.translate('Common.Yes'),
						callback: async (): Promise<void> => {
							await firstValueFrom(this._recipeingredientService.delete(doc));

							this.setRows();
						},
					},
				],
			});
		},
		buttons: [
			{
				icon: 'cloud_download',
				click: (doc: Recipeingredient): void => {
					this._form.modalUnique<Recipeingredient>('recipeingredient', 'url', doc);
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

	rows: Recipeingredient[] = [];

	constructor(
		private _translate: TranslateService,
		private _recipeingredientService: RecipeingredientService,
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
				this._recipeingredientService.get({ page }).subscribe((rows) => {
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
				.modalDocs<Recipeingredient>(create ? [] : this.rows)
				.then(async (recipeingredients: Recipeingredient[]) => {
					if (create) {
						for (const recipeingredient of recipeingredients) {
							this._preCreate(recipeingredient);

							await firstValueFrom(
								this._recipeingredientService.create(recipeingredient)
							);
						}
					} else {
						for (const recipeingredient of this.rows) {
							if (
								!recipeingredients.find(
									(localRecipeingredient) => localRecipeingredient._id === recipeingredient._id
								)
							) {
								await firstValueFrom(
									this._recipeingredientService.delete(recipeingredient)
								);
							}
						}

						for (const recipeingredient of recipeingredients) {
							const localRecipeingredient = this.rows.find(
								(localRecipeingredient) => localRecipeingredient._id === recipeingredient._id
							);

							if (localRecipeingredient) {
								this._core.copy(recipeingredient, localRecipeingredient);

								await firstValueFrom(
									this._recipeingredientService.update(localRecipeingredient)
								);
							} else {
								this._preCreate(recipeingredient);

								await firstValueFrom(
									this._recipeingredientService.create(recipeingredient)
								);
							}
						}
					}

					this.setRows();
				});
		};
	}

	private _preCreate(recipeingredient: Recipeingredient): void {
		delete recipeingredient.__created;
	}
}
