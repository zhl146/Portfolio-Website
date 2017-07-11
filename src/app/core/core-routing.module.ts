import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

const coreRoutes = [
  { path: '', component: AboutComponent,
    children: [
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(coreRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class CoreRoutingModule {}
