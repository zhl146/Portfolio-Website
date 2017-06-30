import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { SubHeadingComponent } from './sub-heading/sub-heading.component';
import { CardTitleComponent } from './card/card-title.component';
import { CardSubtitleComponent } from './card/card-subtitle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardComponent,
    SubHeadingComponent,
    CardTitleComponent,
    CardSubtitleComponent
  ],
  exports: [
    CardComponent,
    SubHeadingComponent,
    CardTitleComponent,
    CardSubtitleComponent
  ]
})
export class SharedModule { }