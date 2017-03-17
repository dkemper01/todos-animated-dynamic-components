import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HowtoComponent } from './howto/howto.component';
import { ExamplesComponent } from './examples/examples.component';

const router: Routes = [
	{ path: 'howTo', component: HowtoComponent },
	{ path: 'examples', component: ExamplesComponent },
	{ path: '', redirectTo: '/howTo', pathMatch: 'full' }
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

