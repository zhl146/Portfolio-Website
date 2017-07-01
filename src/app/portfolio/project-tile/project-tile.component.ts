import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.scss']
})
export class ProjectTileComponent implements OnInit {

  @Input('project') project: Project;
  constructor() { }

  ngOnInit() {
  }

}
