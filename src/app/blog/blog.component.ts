import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  template: `
    <app-card>
      <router-outlet></router-outlet>
    </app-card>
  `,
  styles: []
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
