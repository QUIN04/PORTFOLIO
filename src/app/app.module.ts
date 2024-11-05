import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import {FooterComponent} from './layouts/footer/footer.component';
import {ServicesComponent} from './pages/services/services.component';
import { ProjDemosComponent } from './pages/proj-demos/proj-demos.component';

@NgModule({
  declarations: [
    AppComponent,     
    AboutComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    ProjDemosComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
