import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogHomeComponent } from './blog-home/blog-home.component';

const blogRoutes = [
  { path: 'blog', component: BlogHomeComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(blogRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BlogRoutingModule {}
