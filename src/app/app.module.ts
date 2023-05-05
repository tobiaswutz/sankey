import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SankeyChartComponent } from './components/sankey-chart/sankey-chart.component';

import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
PlotlyModule.plotlyjs = PlotlyJS;



@NgModule({
  declarations: [AppComponent, SankeyChartComponent, SankeyChartComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlotlyModule,
  ],
  exports: [SankeyChartComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
