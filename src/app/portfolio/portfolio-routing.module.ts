import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { PortfolioComponent } from './portfolio.component';

const portfolioRoutes: Routes = [
  { path: 'portfolio', component: PortfolioComponent,
    children: [
      { path: ':id', component: ProjectDetailComponent},
      { path: '', component: ProjectListComponent, pathMatch: 'full' }
    ]
  }
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
