import { Injectable } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { UUID } from 'angular2-uuid';

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
      enabled: false
    }
  };
  public layout: GridsterItem[] = [];

  constructor() { }

  public addItem(): void {
    this.layout.push({
      cols: 2,
      id: UUID.UUID(),
      rows: 1,
      x: 0,
      y: 0
    });
  }

  public deleteItem(id: string): void {
    const item = this.layout.find(d => d.id === id);
    this.layout.splice(this.layout.indexOf(item), 1);
  }
}
