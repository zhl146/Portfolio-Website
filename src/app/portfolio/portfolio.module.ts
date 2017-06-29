import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ],
  declarations: [
    ProjectsComponent
  ]
})
export class PortfolioModule { }
