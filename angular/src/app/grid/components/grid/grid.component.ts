import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild, ComponentFactory, ViewChildren, OnChanges } from '@angular/core';
import { GridsterConfig, GridsterItem, GridsterItemComponent } from 'angular-gridster2';
import { GridService, IComponent } from '../../services/grid.service';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
import { BarGraphComponent } from '../bar-graph/bar-graph.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @ViewChild('chartContainer', { read: ViewContainerRef }) container;
  @ViewChildren('chartItem', { read: ViewContainerRef }) items;


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
    const id = this.gridService.addItem();
    window.setTimeout(() => {
      const gridItems: ViewContainerRef[] = this.items._results;
      console.log('TCL: GridComponent -> addItem -> gridItems', gridItems);
      const viewContainerRef = gridItems.find((containRef) =>  containRef.element.nativeElement.id === id);
      console.log('TCL: GridComponent -> addItem -> viewContainerRef', viewContainerRef);
      this.createComponent(viewContainerRef);
    });
  }

  public deleteItem(item) {
    console.log(item);
    this.gridService.deleteItem(item.id);
  }

  private async createComponent(viewContainerRef) {
    const type = Math.round( Math.random());
    const pieChart: ComponentFactory<PieChartComponent> = this.resolver.resolveComponentFactory(PieChartComponent);
    const barGraph: ComponentFactory<PieChartComponent> = this.resolver.resolveComponentFactory(BarGraphComponent);
    viewContainerRef.createComponent(type ? pieChart : barGraph);
  }

  public updateGrid(grid) {
    window.setTimeout(() => {
      console.log('TCL: GridComponent -> updateGrid -> grid', grid);
      this.gridService.updateGrid(grid);
    }, 0);
  }

}
