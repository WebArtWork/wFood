import { Component } from '@angular/core';
import { AlertService, CoreService } from 'wacom';
import { RecipelinkService } from '../../services/recipelink.service';
import { Recipelink } from '../../interfaces/recipelink.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { recipelinkFormComponents } from '../../formcomponents/recipelink.formcomponents';
import { firstValueFrom } from 'rxjs';

@Component({
	templateUrl: './links.component.html',
	styleUrls: ['./links.component.scss'],
	standalone: false,
})
export class LinksComponent {
	columns = ['name', 'description'];

	form: FormInterface = this._form.getForm('recipelink', recipelinkFormComponents);

	config = {
		paginate: this.setRows.bind(this),
		perPage: 20,
		setPerPage: this._recipelinkService.setPerPage.bind(this._recipelinkService),
		allDocs: false,
		create: (): void => {
			this._form.modal<Recipelink>(this.form, {
				label: 'Create',
				click: async (created: unknown, close: () => void) => {
					close();

					this._preCreate(created as Recipelink);

					await firstValueFrom(
						this._recipelinkService.create(created as Recipelink)
					);

					this.setRows();
				},
			});
		},
		update: (doc: Recipelink): void => {
			this._form
				.modal<Recipelink>(this.form, [], doc)
				.then((updated: Recipelink) => {
					this._core.copy(updated, doc);

					this._recipelinkService.update(doc);
				});
		},
		delete: (doc: Recipelink): void => {
			this._alert.question({
				text: this._translate.translate(
					'Common.Are you sure you want to delete this recipelink?'
				),
				buttons: [
					{
						text: this._translate.translate('Common.No'),
					},
					{
						text: this._translate.translate('Common.Yes'),
						callback: async (): Promise<void> => {
							await firstValueFrom(this._recipelinkService.delete(doc));

							this.setRows();
						},
					},
				],
			});
		},
		buttons: [
			{
				icon: 'cloud_download',
				click: (doc: Recipelink): void => {
					this._form.modalUnique<Recipelink>('recipelink', 'url', doc);
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

	rows: Recipelink[] = [];

	constructor(
		private _translate: TranslateService,
		private _recipelinkService: RecipelinkService,
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
				this._recipelinkService.get({ page }).subscribe((rows) => {
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
				.modalDocs<Recipelink>(create ? [] : this.rows)
				.then(async (recipelinks: Recipelink[]) => {
					if (create) {
						for (const recipelink of recipelinks) {
							this._preCreate(recipelink);

							await firstValueFrom(
								this._recipelinkService.create(recipelink)
							);
						}
					} else {
						for (const recipelink of this.rows) {
							if (
								!recipelinks.find(
									(localRecipelink) => localRecipelink._id === recipelink._id
								)
							) {
								await firstValueFrom(
									this._recipelinkService.delete(recipelink)
								);
							}
						}

						for (const recipelink of recipelinks) {
							const localRecipelink = this.rows.find(
								(localRecipelink) => localRecipelink._id === recipelink._id
							);

							if (localRecipelink) {
								this._core.copy(recipelink, localRecipelink);

								await firstValueFrom(
									this._recipelinkService.update(localRecipelink)
								);
							} else {
								this._preCreate(recipelink);

								await firstValueFrom(
									this._recipelinkService.create(recipelink)
								);
							}
						}
					}

					this.setRows();
				});
		};
	}

	private _preCreate(recipelink: Recipelink): void {
		delete recipelink.__created;
	}
}
