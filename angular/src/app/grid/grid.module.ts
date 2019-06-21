import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './components/grid/grid.component';
import { GridsterModule } from 'angular-gridster2';
import { AddTileComponent } from './components/add-tile/add-tile.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { BarGraphComponent } from './components/bar-graph/bar-graph.component';

@NgModule({
  declarations: [GridComponent, AddTileComponent, PieChartComponent, BarGraphComponent],
  imports: [
    CommonModule,
    GridsterModule
  ],
  entryComponents: [AddTileComponent, PieChartComponent, BarGraphComponent]
})
export class GridModule { }
