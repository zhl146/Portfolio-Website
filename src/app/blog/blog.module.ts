import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogDataService } from './blog-data.service';
import { BlogComponent } from './blog.component';
import { HttpWrapper } from '../shared/http-wrapper.service';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ],
  declarations: [
    BlogListComponent,
    BlogPostComponent,
    BlogComponent
  ],
  providers: [
    BlogDataService,
    HttpWrapper
  ]
})
export class BlogModule { }
