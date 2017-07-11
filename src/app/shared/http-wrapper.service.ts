import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpWrapper {

  private apiVersion = 'v1';
  private baseUrl = 'http://localhost:8000';

  // endpoints
  private blogEndpoint = 'posts';

  constructor( private http: Http ) { }

  genericGet(endPoint: string) {
    const fullUrl = this.createRoute(endPoint);
    console.log(fullUrl)
    return this.http.get(fullUrl);
  }

  createRoute(endPoint: string): string {
    return this.baseUrl + '/' + endPoint;
  }

  getRemoteSummaries(internalRoute: string, posts = 5, offset = 0) {
    const endPoint = this.blogEndpoint + '/' +
      internalRoute + '?posts=' + posts + ';?offset=' + offset;
    return this.genericGet(endPoint)
  }

  getBlogPost(title_slug) {
    const endPoint = this.blogEndpoint + '/' + title_slug;
    return this.genericGet(endPoint)
  }

}
