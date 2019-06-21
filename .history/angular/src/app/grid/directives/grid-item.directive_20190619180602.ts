import {
  Directive,
  Input,
  OnChanges,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef
} from '@angular/core';
import { AddTileComponent } from '../components/add-tile/add-tile.component';
import { PieChartComponent } from '../components/pie-chart/pie-chart.component';

const components = {
  addTile: AddTileComponent,
  pieChart: PieChartComponent
};

@Directive({
  selector: '[appGridItem]'
})
export class GridItemDirective implements OnChanges {
  @Input() componentRef: string;
  component: ComponentRef<any>;

  constructor(
    private container: ViewContainerRef,
    private resolver: ComponentFactoryResolver) {}

    ngOnChanges(): void {
    const component = components[this.componentRef];
    console.log('component', component);

    if (component) {
      const factory = this.resolver.resolveComponentFactory<any>(component);
      this.component = this.container.createComponent(factory);
      console.log(this.component);
    }
  }
}
