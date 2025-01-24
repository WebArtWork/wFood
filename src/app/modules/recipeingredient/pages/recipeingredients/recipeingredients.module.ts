import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { RecipeingredientsComponent } from './recipeingredients.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: RecipeingredientsComponent
	},
	{
		path: ':recipe_id',
		component: RecipeingredientsComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [RecipeingredientsComponent],
	providers: []
})
export class RecipeingredientsModule {}
