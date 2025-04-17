import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  stats = [
    { title: 'Revenue', value: '$34,245', icon: 'attach_money', color: '#4caf50', increase: true, percentage: '3.48%' },
    { title: 'Users', value: '2,300', icon: 'person', color: '#2196f3', increase: true, percentage: '12.4%' },
    { title: 'New Orders', value: '34', icon: 'shopping_cart', color: '#ff9800', increase: false, percentage: '1.10%' },
    {
      title: 'Bounce Rate',
      value: '24%',
      icon: 'trending_down',
      color: '#f44336',
      increase: false,
      percentage: '2.71%',
    },
  ];
}
