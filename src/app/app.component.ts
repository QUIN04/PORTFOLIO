import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {CommonModule} from '@angular/common';
import { ProjDemosComponent } from "./pages/proj-demos/proj-demos.component";
import { AboutComponent } from "./pages/about/about.component";
import { HomeComponent } from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-app';
  
}
