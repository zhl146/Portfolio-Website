import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { SubHeadingComponent } from './sub-heading/sub-heading.component';
import { CardTitleComponent } from './card/card-title.component';
import { CardSubtitleComponent } from './card/card-subtitle.component';
import { ButtonComponent } from './button/button.component';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    CardComponent,
    SubHeadingComponent,
    CardTitleComponent,
    CardSubtitleComponent,
    ButtonComponent
  ],
  exports: [
    CardComponent,
    SubHeadingComponent,
    CardTitleComponent,
    CardSubtitleComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
