import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { RouletteComponent } from './roulette.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: RouletteComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [RouletteComponent]
})
export class RouletteModule {}
