import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectTileComponent } from './project-tile/project-tile.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { PortfolioComponent } from './portfolio.component';
import { ProjectsDataService } from './projects-data.service';

@NgModule({
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule
  ],
  declarations: [
    ProjectListComponent,
    ProjectTileComponent,
    ProjectDetailComponent,
    PortfolioComponent
  ],
  providers: [
    ProjectsDataService
  ]
})
export class PortfolioModule { }
