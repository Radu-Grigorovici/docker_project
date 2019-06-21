import { Injectable, ComponentFactory, ComponentFactoryResolver, OnChanges } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { UUID } from 'angular2-uuid';
import { PieChartComponent } from '../components/pie-chart/pie-chart.component';

export interface IComponent {
  id: string;
  componentRef: string;
}

export interface Grid {
  name: string;
  data: object;
}

@Injectable({
  providedIn: 'root'
})
export class GridService {

  public options: GridsterConfig = {
    draggable: {
      enabled: true
    },
    pushItems: true,
    resizable: {
      enabled: true
    },
    minCols: 10, // minimum amount of columns in the grid
    maxCols: 10, // maximum amount of columns in the grid
    minRows: 3, // minimum amount of rows in the grid
    maxRows: 12, // maximum amount of rows in the grid
  };

  public grid: GridsterItem[] = JSON.parse(localStorage.getItem('grid')) || [];

  public components: IComponent[] = [];

  constructor( private resolver: ComponentFactoryResolver ) { }


  public addItem(): string {
    const newId = UUID.UUID();
    this.grid.push({
      cols: 2,
      rows: 1,
      x: 0,
      y: 0,
      id: newId
    });

    this.storeGrid();
    return newId;
  }

  public deleteItem(id: string): void {
    const item = this.grid.find(d => d.id === id);
    this.grid.splice(this.grid.indexOf(item), 1);
    this.storeGrid();
    // const comp = this.components.find(c => c.id === id);
    // this.components.splice(this.components.indexOf(comp), 1);
  }


  public getComponentRef(id: string): string {
    const comp = this.components.find(c => c.id === id);
    return comp ? comp.componentRef : null;
  }

  public updateGrid(grid) {
    this.grid = grid;
    this.storeGrid();
  }

  private storeGrid() {
    localStorage.setItem('grid', JSON.stringify(this.grid));
  }

}

