import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { projects } from './projects-data.const'

@Injectable()
export class ProjectsDataService {

  private projects: Project[] = projects;

  getProjects(): Project[] {
    return this.projects;
  }

  getProject(index: number): Project {
    return this.projects[index];
  }

}
