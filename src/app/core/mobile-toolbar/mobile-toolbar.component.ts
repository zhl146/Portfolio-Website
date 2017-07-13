import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-mobile-toolbar',
  templateUrl: './mobile-toolbar.component.html',
  styleUrls: ['./mobile-toolbar.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate('200ms ease-out', style({
          opacity: 1
        }))
      ]),
      transition(':leave', [
        style({
          opacity: 1
        }),
        animate('200ms ease-in', style({
          opacity: 0
        }))
      ])
    ])
  ]
})
export class MobileToolbarComponent implements OnInit {
  isActive = false;
  constructor() { }

  ngOnInit() {
  }

  toggleActive() {
    this.isActive = !this.isActive;
  }
}
