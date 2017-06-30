import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavCardComponent } from './nav-card/nav-card.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    NavCardComponent
  ],
  exports: [
    NavCardComponent
  ]
})
export class CoreModule { }
