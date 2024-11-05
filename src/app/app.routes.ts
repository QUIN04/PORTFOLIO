import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import {FooterComponent} from './layouts/footer/footer.component';
import {ServicesComponent} from './pages/services/services.component';
import { ProjDemosComponent } from './pages/proj-demos/proj-demos.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
];
