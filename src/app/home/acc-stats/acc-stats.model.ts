import Chart from 'Chart.js';
import { ElementRef, OnInit } from '@angular/core';

export interface data {

}

export class Chart implements OnInit {

  elRef: ElementRef;

  constructor(
    public chartId: string,
    public chartType: string,
    public chartData: data
  ) {
    this.drawChart(
      this.elRef.nativeElement.querySelector(chartId),
      'sfdsv',
      [43, 435, 756]
    );

  }

  ngOnInit() {

  }

  drawChart(id: ElementRef, type: string, data) {

  }
}

