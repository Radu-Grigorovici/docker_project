import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { GridService, IComponent } from '../../services/grid.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  get options(): GridsterConfig {
    return this.gridService.options;
  }
  get grid(): GridsterItem[] {
    return this.gridService.layout;
  }
  get components(): IComponent[] {
    return this.gridService.components;
  }

  constructor(
    private gridService: GridService
  ) { }

  ngOnInit() {
  }

  public addItem() {
    this.gridService.addItem();
  }

  public deleteItem(item) {
    this.gridService.deleteItem(item);
  }

  public getComponentRef(id) {
    this.gridService.getComponentRef(id);
  }

  public dropItem(itemType: string) {
    this.gridService.dropItem(itemType);
  }

}
