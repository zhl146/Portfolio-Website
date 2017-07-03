import { Injectable } from '@angular/core';
import { HttpWrapper } from '../shared/http-wrapper.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class BlogDataService {

  private blogSummaries = new BehaviorSubject(null);

  constructor( private http: HttpWrapper) { }

  get blogSummariesObs() {
    return this.blogSummaries.asObservable();
  }

  retrieveRemoteSummaries(route) {
    this.http.getRemoteSummaries(route)
      .subscribe(
        (response) => {
          this.blogSummaries.next(response.json().posts);
          console.log(this.blogSummaries)
        }
      )
  }

}
