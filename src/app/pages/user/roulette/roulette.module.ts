import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { RouletteComponent } from './roulette.component';
import { Routes, RouterModule } from '@angular/router';
import { RoulettesComponent } from './roulettes/roulettes.component';

const routes: Routes = [
	{
		path: '',
		component: RouletteComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [RouletteComponent, RoulettesComponent]
})
export class RouletteModule {}
