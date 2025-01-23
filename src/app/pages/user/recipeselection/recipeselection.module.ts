import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { RecipeselectionComponent } from './recipeselection.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: RecipeselectionComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [RecipeselectionComponent]
})
export class RecipeselectionModule {}
