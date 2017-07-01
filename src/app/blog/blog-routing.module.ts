import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogComponent } from './blog.component';

const blogRoutes = [
  { path: 'blog', component: BlogComponent,
    // children: [
    //   { path: ':id', component: BlogPostComponent },
    //   { path: '', component: BlogHomeComponent, pathMatch: 'full'}
    // ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(blogRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BlogRoutingModule {}
