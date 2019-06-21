import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { GridService } from '../../services/grid.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  get options(): GridsterConfig {
    return this.gridService.options;
  }
  get grid(): GridsterItem[] {
    return this.gridService.layout;
  }
  constructor(
    private gridService: GridService
  ) { }

  ngOnInit() {
  }

}
