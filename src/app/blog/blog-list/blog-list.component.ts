import { Component, OnInit } from '@angular/core';
import { BlogPost, BlogSummary } from '../blog.model';
import { BlogDataService } from '../blog-data.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-list.component.html',
  styleUrls: ['../blog-shared.component.scss']
})
export class BlogListComponent implements OnInit {

  blogSummaries;

  private queryYear: string;
  private queryMonth: string;
  private queryDay: string;
  pageCounter: number;
  private postsPerPage: number;

  constructor( private blogService: BlogDataService,
               private route: ActivatedRoute,
               private router: Router ) { }

  ngOnInit() {
    // when navigating here, the user should always start on the first page
    this.pageCounter = 0;

    // defaults to showing 50 posts per page
    this.postsPerPage = 50;

    this.blogSummaries = this.blogService.blogSummariesObs;

    //
    this.blogService.retrieveRemoteSummaries(
      this.makeRoute(),
      this.postsPerPage,
      this.pageCounter * this.postsPerPage);
    this.makeRoute();
    this.route.params
      .subscribe(
        (params) => {
          if (params.year) { this.queryYear = params.year }
          if (params.month) { this.queryMonth = params.month }
          if (params.day) { this.queryDay = params.day }
          this.blogService.retrieveRemoteSummaries(
            this.makeRoute(),
            this.postsPerPage,
            this.pageCounter * this.postsPerPage);
        }
      );
  }

  makeRoute() {
    let route = '';
    if (this.queryYear !== undefined) {
      route = route + this.queryYear + '/';
    }
    if (this.queryMonth !== undefined) {
      route = route + this.queryMonth + '/';
    }
    if (this.queryDay !== undefined) {
      route = route + this.queryDay + '/';
    }
    return route;
  }

  onBlogMore(title_slug: string) {
    this.router.navigate(['blog', 'post', title_slug]);
  }
}
