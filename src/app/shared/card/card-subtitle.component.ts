import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-subtitle',
  template: `
    <div class="card-subtitle">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./card.component.scss']
})
export class CardSubtitleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
