import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-title',
  template: `
    <div class="card-title">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./card.component.scss']
})
export class CardTitleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
