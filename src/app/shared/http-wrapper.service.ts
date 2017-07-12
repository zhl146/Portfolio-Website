import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpWrapper {

  private apiVersion = 'v1';
  private localUrl = 'http://localhost:8000';
  private remoteUrl = 'https://zhenlu.info/portfolio';

  // endpoints
  private blogEndpoint = 'posts';
  private projectEndpoint = 'projects';

  constructor( private http: Http ) { }

  genericGet(endPoint: string) {
    const fullUrl = this.createRoute(endPoint);
    return this.http.get(fullUrl);
  }

  createRoute(endPoint: string): string {
    // return this.baseUrl + '/' + endPoint;
    return this.remoteUrl + '/' + endPoint;
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

  getProjects() {
    const endPoint = this.projectEndpoint + '/';
    return this.genericGet(endPoint);
  }

}
