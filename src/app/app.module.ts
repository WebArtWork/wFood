import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Core
import { GuestComponent } from './core/theme/guest/guest.component';
import { UserComponent } from './core/theme/user/user.component';
import { AppComponent } from './app.component';
import { CoreModule } from 'src/app/core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// config
import { WacomModule, MetaGuard } from 'wacom';
import { environment } from 'src/environments/environment';
import { AuthenticatedGuard } from './core/guards/authenticated.guard';
import { GuestGuard } from './core/guards/guest.guard';
import { AdminsGuard } from './core/guards/admins.guard';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/sign',
		pathMatch: 'full'
	},
	{
		path: '',
		canActivate: [GuestGuard],
		component: GuestComponent,
		children: [
			/* guest */
			{
				path: 'components',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Components'
					}
				},
				loadChildren: () =>
					import('./pages/guest/components/components.module').then(
						(m) => m.ComponentsModule
					)
			},
			{
				path: 'sign',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Sign'
					}
				},
				loadChildren: () =>
					import('./pages/guest/sign/sign.module').then(
						(m) => m.SignModule
					)
			}
		]
	},
	{
		path: '',
		canActivate: [AuthenticatedGuard],
		component: UserComponent,
		children: [
			/* user */
			{
				path: 'recipesearch',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Recipesearch'
					}
				},
				loadChildren: () => import('./pages/user/recipesearch/recipesearch.module').then(m => m.RecipesearchModule)
			}, 
			{
				path: 'recipecreationpage',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Recipecreationpage'
					}
				},
				loadChildren: () => import('./pages/user/recipecreationpage/recipecreationpage.module').then(m => m.RecipecreationpageModule)
			}, 
			{
				path: 'recipeprofile',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Recipeprofile'
					}
				},
				loadChildren: () => import('./pages/user/recipeprofile/recipeprofile.module').then(m => m.RecipeprofileModule)
			}, 
			{
				path: 'roulette',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Roulette'
					}
				},
				loadChildren: () => import('./pages/user/roulette/roulette.module').then(m => m.RouletteModule)
			}, 
			{
				path: 'recipeselection',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Recipeselection'
					}
				},
				loadChildren: () => import('./pages/user/recipeselection/recipeselection.module').then(m => m.RecipeselectionModule)
			}, 
			{
				path: 'myrecipes',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Myrecipes'
					}
				},
				loadChildren: () => import('./pages/user/myrecipes/myrecipes.module').then(m => m.MyrecipesModule)
			}, 
			{
				path: 'recipephases',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Recipephases'
					}
				},
				loadChildren: () => import('./modules/recipephase/pages/recipephases/recipephases.module').then(m => m.RecipephasesModule)
			}, 
			{
				path: 'recipeingredients',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Recipeingredients'
					}
				},
				loadChildren: () => import('./modules/recipeingredient/pages/recipeingredients/recipeingredients.module').then(m => m.RecipeingredientsModule)
			}, 
			{
				path: 'recipes',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Recipes'
					}
				},
				loadChildren: () => import('./modules/recipe/pages/recipes/recipes.module').then(m => m.RecipesModule)
			}, 
			{
				path: 'profile',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'My Profile'
					}
				},
				loadChildren: () =>
					import('./pages/user/profile/profile.module').then(
						(m) => m.ProfileModule
					)
			}
		]
	},
	{
		path: 'admin',
		canActivate: [AdminsGuard],
		component: UserComponent,
		children: [
			/* admin */
			{
				path: 'users',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Users'
					}
				},
				loadChildren: () =>
					import('./modules/user/pages/users/users.module').then(
						(m) => m.UsersModule
					)
			},
			{
				path: 'forms',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Forms'
					}
				},
				loadChildren: () =>
					import(
						'./modules/customform/pages/customforms/customforms.module'
					).then((m) => m.CustomformsModule)
			},
			{
				path: 'translates',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Translates'
					}
				},
				loadChildren: () =>
					import(
						'./core/modules/translate/pages/translates/translates.module'
					).then((m) => m.TranslatesModule)
			}
		]
	},
	{
		path: '**',
		redirectTo: 'profile',
		pathMatch: 'full'
	}
];

@NgModule({
	declarations: [AppComponent, GuestComponent, UserComponent],
	imports: [
		FormsModule,
		CoreModule,
		BrowserModule,
		BrowserAnimationsModule,
		WacomModule.forRoot({
			store: {},
			http: {
				url: environment.url
			},
			socket: environment.production,
			meta: {
				useTitleSuffix: true,
				defaults: {
					title: environment.meta.title,
					description: environment.meta.description,
					titleSuffix: ' | ' + environment.meta.title,
					'og:image': environment.meta.icon
				}
			},
			modal: {
				modals: {
					/* modals */
				}
			},
			alert: {
				alerts: {
					/* alerts */
				}
			},
			loader: {
				loaders: {
					/* loaders */
				}
			},
			popup: {
				popups: {
					/* popups */
				}
			}
		}),
		RouterModule.forRoot(routes, {
			scrollPositionRestoration: 'enabled',
			preloadingStrategy: PreloadAllModules
		})
	],
	providers: [
		/* providers */
		{ provide: LocationStrategy, useClass: HashLocationStrategy },
		AuthenticatedGuard,
		GuestGuard,
		AdminsGuard
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
