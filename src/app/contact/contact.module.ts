import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { ThanksComponent } from './thanks/thanks.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    ContactComponent,
    ThanksComponent
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactModule { }
