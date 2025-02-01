import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { RecipesearchComponent } from './recipesearch.component';
import { Routes, RouterModule } from '@angular/router';
import { RecipesearchesComponent } from './recipesearches/recipesearches.component';

const routes: Routes = [
	{
		path: '',
		component: RecipesearchComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [RecipesearchComponent, RecipesearchesComponent]
})
export class RecipesearchModule {}
