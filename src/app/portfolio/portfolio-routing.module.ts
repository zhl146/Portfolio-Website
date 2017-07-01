import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectListComponent } from './project-list/project-list.component';

const portfolioRoutes: Routes = [
  { path: 'portfolio', component: ProjectListComponent }
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
