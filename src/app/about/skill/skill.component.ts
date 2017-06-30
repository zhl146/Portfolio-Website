import { Component, Input, OnInit } from '@angular/core';
import { style, transition, trigger, animate } from '@angular/animations';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  animations: [
    trigger('slideInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)'}),
        animate('1000ms ease-out',
          style({transform: 'translateX(0)' })
        )
      ])
    ])
  ]
})
export class SkillComponent implements OnInit {

  @Input('progress') progress: number;
  @Input('color') color = 'green';

  constructor() { }

  ngOnInit() {
  }

}
