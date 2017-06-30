import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education/education.component';
import { SkillComponent } from './skill/skill.component';
import { AboutComponent } from './about.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BrowserAnimationsModule
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
