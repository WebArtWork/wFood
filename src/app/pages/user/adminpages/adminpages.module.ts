import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { AdminpagesComponent } from './adminpages.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: AdminpagesComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [AdminpagesComponent]
})
export class AdminpagesModule {}
