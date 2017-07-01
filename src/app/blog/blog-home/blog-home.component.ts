import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog.model';
import { BlogDataService } from '../blog-data.service';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.scss']
})
export class BlogHomeComponent implements OnInit {

  blogPosts: BlogPost[];

  constructor( private blogService: BlogDataService ) { }

  ngOnInit() {
  }

}
