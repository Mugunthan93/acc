import { Component, OnInit, ElementRef } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-acc-stats',
  templateUrl: './acc-stats.page.html',
  styleUrls: ['./acc-stats.page.scss'],
})
export class AccStatsPage implements OnInit {

  myChart: any;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    let htmlRef = this.elementRef.nativeElement.querySelector(`#myChart`);
    this.myChart = new Chart(htmlRef, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [10, 20, 30, 40],
          backgroundColor: [
            'rgb(30, 191, 12)',
            'rgb(3, 44, 246)',
            'rgb(239, 35, 35)',
            'rgba(99, 109, 106, 0.1)'

          ]
        }],
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
          'Incomes',
          'Expenses',
          'Liabilities',
          'Assets'
        ]
      },
      options: {
        legend: {
          position: 'bottom'
        }
      }
    });
  }

}
