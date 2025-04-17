import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-email-subscription-chart',
  standalone: false,
  templateUrl: './email-subscription-chart.component.html',
  styleUrl: './email-subscription-chart.component.css'
})
export class EmailSubscriptionChartComponent implements OnInit {
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55],
        label: 'Email Subscriptions',
        backgroundColor: 'rgba(76, 175, 80, 0.7)',
        borderColor: 'rgba(76, 175, 80, 1)',
        hoverBackgroundColor: 'rgba(76, 175, 80, 0.9)',
        borderWidth: 1,
      },
    ],
  };

  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
