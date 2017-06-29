import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';

const portfolioRoutes: Routes = [
  { path: 'portfolio', component: ProjectsComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(portfolioRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PortfolioRoutingModule { }
