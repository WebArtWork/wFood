import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { RecipeprofileComponent } from './recipeprofile.component';
import { Routes, RouterModule } from '@angular/router';
import { IngredientComponent } from './ingredient/ingredient.component';
import { StepComponent } from './step/step.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
	{
		path: ':recipeprofile_id',
		component: RecipeprofileComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [RecipeprofileComponent, IngredientComponent, StepComponent, NotesComponent]
})
export class RecipeprofileModule {
	
}