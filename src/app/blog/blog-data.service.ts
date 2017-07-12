import { Injectable } from '@angular/core';
import { HttpWrapper } from '../shared/http-wrapper.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class BlogDataService {

  private blogSummaries = new BehaviorSubject(null);
  private blogPost = new Subject();

  constructor( private http: HttpWrapper) { }

  get blogSummariesObs() {
    return this.blogSummaries.asObservable();
  }

  get post() {
    return this.blogPost.asObservable();
  }

  retrieveRemoteSummaries(route, posts, offset) {
    this.http.getRemoteSummaries(route, posts, offset)
      .subscribe(
        (response) => {
          this.blogSummaries.next(response.json().posts);
          console.log(this.blogSummaries)
        }
      )
  }

  retrieveBlogPost(title_slug) {
    this.http.getBlogPost(title_slug)
      .subscribe(
        (response) => {
          this.blogPost.next(response.json());
        }
      )
  }

}
