
import { Component } from '@angular/core';
import { NavbarComponent } from "../../layouts/navbar/navbar.component";
import { AboutComponent } from "../about/about.component";
import { ProjDemosComponent } from "../proj-demos/proj-demos.component";
import { ServicesComponent } from '../services/services.component';
import { FooterComponent } from '../../layouts/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, AboutComponent,ServicesComponent, ProjDemosComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  pdfUrl: string = '/assets/resume.pdf';

  constructor () {

  }
  ngOnInit(){

  }
  url = "assets/moi.jpg"
}
