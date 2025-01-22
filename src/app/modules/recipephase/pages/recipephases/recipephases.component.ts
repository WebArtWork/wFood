import { Component } from '@angular/core';
import { AlertService, CoreService } from 'wacom';
import { RecipephaseService } from '../../services/recipephase.service';
import { Recipephase } from '../../interfaces/recipephase.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { recipephaseFormComponents } from '../../formcomponents/recipephase.formcomponents';
import { firstValueFrom } from 'rxjs';

@Component({
	templateUrl: './recipephases.component.html',
	styleUrls: ['./recipephases.component.scss'],
	standalone: false,
})
export class RecipephasesComponent {
	columns = ['name', 'description'];

	form: FormInterface = this._form.getForm('recipephase', recipephaseFormComponents);

	config = {
		paginate: this.setRows.bind(this),
		perPage: 20,
		setPerPage: this._recipephaseService.setPerPage.bind(this._recipephaseService),
		allDocs: false,
		create: (): void => {
			this._form.modal<Recipephase>(this.form, {
				label: 'Create',
				click: async (created: unknown, close: () => void) => {
					close();

					this._preCreate(created as Recipephase);

					await firstValueFrom(
						this._recipephaseService.create(created as Recipephase)
					);

					this.setRows();
				},
			});
		},
		update: (doc: Recipephase): void => {
			this._form
				.modal<Recipephase>(this.form, [], doc)
				.then((updated: Recipephase) => {
					this._core.copy(updated, doc);

					this._recipephaseService.update(doc);
				});
		},
		delete: (doc: Recipephase): void => {
			this._alert.question({
				text: this._translate.translate(
					'Common.Are you sure you want to delete this recipephase?'
				),
				buttons: [
					{
						text: this._translate.translate('Common.No'),
					},
					{
						text: this._translate.translate('Common.Yes'),
						callback: async (): Promise<void> => {
							await firstValueFrom(this._recipephaseService.delete(doc));

							this.setRows();
						},
					},
				],
			});
		},
		buttons: [
			{
				icon: 'cloud_download',
				click: (doc: Recipephase): void => {
					this._form.modalUnique<Recipephase>('recipephase', 'url', doc);
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

	rows: Recipephase[] = [];

	constructor(
		private _translate: TranslateService,
		private _recipephaseService: RecipephaseService,
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
				this._recipephaseService.get({ page }).subscribe((rows) => {
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
				.modalDocs<Recipephase>(create ? [] : this.rows)
				.then(async (recipephases: Recipephase[]) => {
					if (create) {
						for (const recipephase of recipephases) {
							this._preCreate(recipephase);

							await firstValueFrom(
								this._recipephaseService.create(recipephase)
							);
						}
					} else {
						for (const recipephase of this.rows) {
							if (
								!recipephases.find(
									(localRecipephase) => localRecipephase._id === recipephase._id
								)
							) {
								await firstValueFrom(
									this._recipephaseService.delete(recipephase)
								);
							}
						}

						for (const recipephase of recipephases) {
							const localRecipephase = this.rows.find(
								(localRecipephase) => localRecipephase._id === recipephase._id
							);

							if (localRecipephase) {
								this._core.copy(recipephase, localRecipephase);

								await firstValueFrom(
									this._recipephaseService.update(localRecipephase)
								);
							} else {
								this._preCreate(recipephase);

								await firstValueFrom(
									this._recipephaseService.create(recipephase)
								);
							}
						}
					}

					this.setRows();
				});
		};
	}

	private _preCreate(recipephase: Recipephase): void {
		delete recipephase.__created;
	}
}
