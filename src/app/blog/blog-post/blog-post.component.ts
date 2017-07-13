import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogDataService } from '../blog-data.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['../blog-shared.component.scss']
})
export class BlogPostComponent implements OnInit {

  blogPost;

  constructor( private route: ActivatedRoute,
               private blogService: BlogDataService ) { }

  ngOnInit() {
    this.blogPost = this.blogService.post;
    this.route.params
      .subscribe(
        (params) => {
          this.blogService.retrieveBlogPost(params.slug);
        }
      )
  }

}
