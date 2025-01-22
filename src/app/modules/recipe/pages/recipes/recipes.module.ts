import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { RecipesComponent } from './recipes.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: RecipesComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [RecipesComponent],
	providers: []
})
export class RecipesModule {}
