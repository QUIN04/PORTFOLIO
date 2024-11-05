import { Component } from '@angular/core';

@Component({
  selector: 'app-proj-demos',
   standalone: true,
  templateUrl: './proj-demos.component.html',
  styleUrl: './proj-demos.component.css'
})
export class ProjDemosComponent {
  projects = [
    {
      image: 'assets/project1.jpg',
      title: 'Project 1',
      link: 'https://example.com/project1'
    },
    {
      image: 'assets/project2.jpg',
      title: 'Project 2',
      link: 'https://example.com/project2'
    },
    {
      image: 'assets/project3.jpg',
      title: 'Project 3',
      link: 'https://example.com/project3'
    },
    {
      image: 'assets/project4.jpg',
      title: 'Project 4',
      link: 'https://example.com/project4'
    }
  ];
}
