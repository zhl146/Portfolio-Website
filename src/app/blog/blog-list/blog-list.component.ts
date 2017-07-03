import { Component, OnInit } from '@angular/core';
import { BlogPost, BlogSummary } from '../blog.model';
import { BlogDataService } from '../blog-data.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogSummaries;

  private queryYear: string;
  private queryMonth: string;
  private queryDay: string;

  constructor( private blogService: BlogDataService,
               private route: ActivatedRoute ) { }

  ngOnInit() {
    this.blogSummaries = this.blogService.blogSummariesObs
    this.route.params
      .subscribe(
        (params) => {
          if (params.year) { this.queryYear = params.year }
          if (params.month) { this.queryMonth = params.month }
          if (params.day) { this.queryDay = params.day }
          this.blogService.retrieveRemoteSummaries(this.makeRouteFromParams());
          console.log(this.blogSummaries)
        }
      );
  }

  makeRouteFromParams() {
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
    console.log(route)
    return route;
  }

}
