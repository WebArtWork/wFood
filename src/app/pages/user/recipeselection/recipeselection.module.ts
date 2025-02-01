import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { RecipeSelectionComponent } from './recipeselection.component';
import { Routes, RouterModule } from '@angular/router';
import { RecipeselectionsComponent } from './recipeselections/recipeselections.component';

const routes: Routes = [
	{
		path: '',
		component: RecipeSelectionComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [RecipeSelectionComponent, RecipeselectionsComponent]
})
export class RecipeselectionModule {}
