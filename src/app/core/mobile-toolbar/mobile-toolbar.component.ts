import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-toolbar',
  templateUrl: './mobile-toolbar.component.html',
  styleUrls: ['./mobile-toolbar.component.scss']
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
