import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { MyrecipesComponent } from './myrecipes.component';
import { Routes, RouterModule } from '@angular/router';
import { MyrecipeComponent } from './myrecipe/myrecipe.component';

const routes: Routes = [
	{
		path: '',
		component: MyrecipesComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [MyrecipesComponent, MyrecipeComponent]
})
export class MyrecipesModule {}
