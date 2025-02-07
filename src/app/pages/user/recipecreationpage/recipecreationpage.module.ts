import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { RecipecreationpagesComponent } from './recipecreationpages/recipecreationpages.component';
import { RecipecreationpageComponent } from './recipecreationpage.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
	{
		path: '',
		component: RecipecreationpageComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [RecipecreationpageComponent, RecipecreationpagesComponent]
})
export class RecipecreationpageModule {}
