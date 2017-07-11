import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogComponent } from './blog.component';

const blogRoutes = [
  { path: 'blog', component: BlogComponent,
    children: [
      { path: 'post/:slug', component: BlogPostComponent},
      { path: ':year', component: BlogListComponent },
      { path: ':year/:month', component: BlogListComponent },
      { path: ':year/:month/:day', component: BlogListComponent },
      { path: '', component: BlogListComponent, pathMatch: 'full' },
    ]
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
