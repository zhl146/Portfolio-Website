import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavCardComponent } from './nav-card/nav-card.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './core-routing.module';
import { MobileToolbarComponent } from './mobile-toolbar/mobile-toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    CoreRoutingModule
  ],
  declarations: [
    NavCardComponent,
    CoreComponent,
    MobileToolbarComponent
  ],
  exports: [
    NavCardComponent,
    MobileToolbarComponent
  ]
})
export class CoreModule { }
