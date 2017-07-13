import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-project',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.scss'],
  animations: [
    trigger('translateUpDown', [
      state('down', style({
        transform: 'translateY(100%)'
      })),
      state('up', style({
        transform: 'translateY(0)'
      })),
      transition('*=>*', [
        animate('200ms ease-in-out')
      ])
    ])
  ]
})
export class ProjectTileComponent implements OnInit {

  @Input('state') state;
  @Input('project') project: Project;
  constructor() { }

  ngOnInit() {
  }

}
