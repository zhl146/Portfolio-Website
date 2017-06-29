import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  declarations: [BlogHomeComponent]
})
export class BlogModule { }
