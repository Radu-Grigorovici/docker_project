import { Injectable } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { UUID } from 'angular2-uuid';

export interface IComponent {
  id: string;
  componentRef: string;
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
  public grid: GridsterItem[] = [{cols: 2, rows: 1, y: 0, x: 0}];

  public components: IComponent[] = [];

  dropId: string;

  constructor() { }

  public addItem(): void {
    this.grid.push({
      cols: 2,
      id: UUID.UUID(),
      rows: 1,
      x: 0,
      y: 0
    });
  }

  public deleteItem(id: string): void {
    const item = this.grid.find(d => d.id === id);
    this.grid.splice(this.grid.indexOf(item), 1);
  }

}
