import { Component } from '@angular/core';
import { Data, Layout, Config } from 'plotly.js';

@Component({
  selector: 'app-sankey-chart',
  templateUrl: './sankey-chart.component.html',
  styleUrls: ['./sankey-chart.component.scss'],
})
export class SankeyChartComponent {
  public graph: {
    data: any;
    layout: Partial<Layout>;
    config: Partial<Config>;
  } = {
    data: [
      {
        type: 'sankey',
        orientation: 'h',
        node: {
          pad: 15,
          thickness: 30,
          line: {
            color: 'black',
            width: 0.5,
          },
          label: [
            'E1',
            'E2',
            'A1',
            'A2',
            'A3',
            'A4',
            'A5',
            'A6',
            'A7',
            'A8',
            'A9',
            'A10',
            'B1',
            'B2',
            'B3',
            'B4',
            'B5',
            'C1', // additional income category
            'C2', // additional income category
            'C3', // additional income category
            'C4', // additional income category
            'C5', // additional income category
            'D1', // additional expenses category
            'D2', // additional expenses category
            'D3', // additional expenses category
            'D4', // additional expenses category
            'D5', // additional expenses category
          ],
          color: [
            'green',
            'green',
            'red',
            'red',
            'red',
            'red',
            'red',
            'red',
            'red',
            'red',
            'red',
            'red',
            'orange',
            'orange',
            'orange',
            'orange',
            'orange',
            'blue', // color for additional income category
            'blue', // color for additional income category
            'blue', // color for additional income category
            'blue', // color for additional income category
            'blue', // color for additional income category
            'purple', // color for additional expenses category
            'purple', // color for additional expenses category
            'purple', // color for additional expenses category
            'purple', // color for additional expenses category
            'purple', // color for additional expenses category
          ],
        },

        link: {
          source: [
            0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 5, 5, 5, 5, 5,
            12, 12, 12, 12, 12,
          ], // additional income starts from source index 17 and additional expenses start from source index 22
          target: [
            2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28,
          ], // additional income end at target index 21 and additional expenses end at target index 27
          value: [
            5, 8, 7, 10, 6, 4, 9, 3, 12, 1, 2, 11, 8, 5, 6, 7, 9, 2, 5, 3, 1, 4,
          ], // values for additional income and expenses
        },
      },
    ],
    layout: {
      title: 'Monthly Income and Expenses Sankey',
      font: {
        size: 20,
      },
      paper_bgcolor: 'black',
      plot_bgcolor: 'black',
      height: 2000,
    },
    config: {
      displaylogo: false,
      displayModeBar: false,
    },
  };
}
