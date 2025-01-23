import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { MyrecipesComponent } from './myrecipes.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: MyrecipesComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [MyrecipesComponent]
})
export class MyrecipesModule {}
