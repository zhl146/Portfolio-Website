import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  template: `
    <app-card>
      <router-outlet></router-outlet>
    </app-card>
  `,
  styles: []
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
