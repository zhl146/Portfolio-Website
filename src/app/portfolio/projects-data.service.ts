import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { HttpWrapper } from '../shared/http-wrapper.service';

@Injectable()
export class ProjectsDataService {

  private projects = new BehaviorSubject(null);

  constructor( private http: HttpWrapper ) {}

  getProjects() {
    return this.projects.asObservable();
  }

  retrieveProjects(): void {
    this.http.getProjects()
      .subscribe(
        (response) => {
          this.projects.next(response.json().projects);
        }
      )
  }
}
