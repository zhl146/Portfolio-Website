import { Component, OnInit } from '@angular/core';
import { ProjectsDataService } from '../projects-data.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects: Project[];

  constructor( private projectsService: ProjectsDataService ) { }

  ngOnInit() {
    this.projects = this.projectsService.getProjects();
    console.log(this.projects)
  }

}
