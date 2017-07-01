import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogDataService } from './blog-data.service';
import { BlogComponent } from './blog.component';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ],
  declarations: [
    BlogHomeComponent,
    BlogPostComponent,
    BlogComponent
  ],
  providers: [
    BlogDataService
  ]
})
export class BlogModule { }
