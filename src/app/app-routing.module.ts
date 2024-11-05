import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component'
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProjDemosComponent } from './pages/proj-demos/proj-demos.component';

const routes: Routes = [
{path:'', component: HomeComponent },
{path: 'about', component: AboutComponent},
{path: 'services', component: ServicesComponent},
{path: 'projects', component: ProjDemosComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }