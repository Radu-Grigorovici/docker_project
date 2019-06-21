import { Injectable, ComponentFactory, ComponentFactoryResolver } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { UUID } from 'angular2-uuid';
import { PieChartComponent } from '../components/pie-chart/pie-chart.component';

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
  public grid: GridsterItem[] = [{cols: 1, rows: 1, y: 0, x: 0, resizeEnabled: false, id: UUID.UUID(), }];

  public components: IComponent[] = [];

  constructor( private resolver: ComponentFactoryResolver ) { }

  public addItem(): void {
    const newId = UUID.UUID();
    console.log('TCL: GridService -> constructor -> newId', newId);
    this.grid.push({
      cols: 2,
      id: newId,
      rows: 1,
      x: 0,
      y: 0
    });
    let element = null;
    window.setTimeout(() => {
      element = document.getElementById('trial');
    }, 0);

    console.log('TCL: GridService -> constructor -> element', element);
    this.createComponent(element);


  }

  public deleteItem(id: string): void {
    const item = this.grid.find(d => d.id === id);
    this.grid.splice(this.grid.indexOf(item), 1);
    const comp = this.components.find(c => c.id === id);
    this.components.splice(this.components.indexOf(comp), 1);
  }


  public getComponentRef(id: string): string {
    const comp = this.components.find(c => c.id === id);
    return comp ? comp.componentRef : null;
  }

  private createComponent(element) {
    const factory: ComponentFactory<PieChartComponent> = this.resolver.resolveComponentFactory(PieChartComponent);
    element.createComponent(factory);
  }

}

