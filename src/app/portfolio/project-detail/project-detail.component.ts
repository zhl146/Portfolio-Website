import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Project } from '../project.model';

import { ProjectsDataService } from '../projects-data.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  project: Project;

  constructor( private projectsService: ProjectsDataService,
               private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params) => {
          const projectIndex = +params['id'];
          this.project = this.projectsService.getProject(projectIndex);
        }
      )
  }

}
