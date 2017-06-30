import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogHomeComponent } from './blog-home/blog-home.component';
import { BlogRoutingModule } from './blog-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ],
  declarations: [BlogHomeComponent]
})
export class BlogModule { }
