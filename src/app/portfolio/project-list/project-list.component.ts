import { Component, OnInit } from '@angular/core';
import { ProjectsDataService } from '../projects-data.service';
import { Project } from '../project.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-projects',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects: Project[] | Observable<Project[]>;
  clickedProject: number | null = null;

  constructor( private projectsService: ProjectsDataService ) { }

  ngOnInit() {
    this.projectsService.retrieveProjects();
    this.projects = this.projectsService.getProjects();
  }

  clickState(index: number) {
    return index === this.clickedProject;
  }

}
