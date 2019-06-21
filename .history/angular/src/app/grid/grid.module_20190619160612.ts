import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './components/grid/grid.component';
import { GridsterModule } from 'angular-gridster2';
import { AddTileComponent } from './components/add-tile/add-tile.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { GridItemDirective } from './directives/grid-item.directive';

@NgModule({
  declarations: [GridComponent, AddTileComponent, PieChartComponent, GridItemDirective],
  imports: [
    CommonModule,
    GridsterModule
  ],
  entryComponents: [AddTileComponent, PieChartComponent]
})
export class GridModule { }
