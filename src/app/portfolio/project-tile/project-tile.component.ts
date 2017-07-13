import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-project',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.scss']
})
export class ProjectTileComponent implements OnInit {

  @Input('state') state;
  @Input('project') project: Project;
  constructor() { }

  ngOnInit() {
  }

}
