import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { RecipephasesComponent } from './recipephases.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: RecipephasesComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [RecipephasesComponent],
	providers: []
})
export class RecipephasesModule {}
