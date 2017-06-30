import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education/education.component';
import { SkillComponent } from './skill/skill.component';
import { AboutComponent } from './about.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    EducationComponent,
    SkillComponent,
    AboutComponent
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
