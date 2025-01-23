import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { RecipeprofileComponent } from './recipeprofile.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: RecipeprofileComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [RecipeprofileComponent]
})
export class RecipeprofileModule {}
