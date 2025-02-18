import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { CreateComponent } from './create.component';
import { Routes, RouterModule } from '@angular/router';
import { PhasesComponent } from './phases/phases.component';
import { IngredientsComponent } from './ingredients/ingredients.component';

const routes: Routes = [
	{
		path: '',
		component: CreateComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [CreateComponent, PhasesComponent, IngredientsComponent]
})
export class CreateModule {}
