import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { GridService, IComponent } from '../../services/grid.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @ViewChild('chartContainer', { read: ViewContainerRef }) container;

  get options(): GridsterConfig {
    return this.gridService.options;
  }
  get grid(): GridsterItem[] {
    return this.gridService.grid;
  }
  get components(): IComponent[] {
    return this.gridService.components;
  }

  constructor(
    private gridService: GridService,
    private resolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
  }

  public addItem() {
    this.gridService.addItem();
  }

  public deleteItem(item) {
    console.log(item);
    this.gridService.deleteItem(item.id);
  }

  // public getComponentRef(id) {
  //   this.gridService.getComponentRef(id);
  // }

  // public dropItem(itemType: string) {
  //   this.gridService.dropItem(itemType);
  // }

  // setDropId(id) {
  //   this.gridService.setDropId(id);
  // }

}
