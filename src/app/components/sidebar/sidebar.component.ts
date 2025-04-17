import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  menuItems = [
    { name: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { name: 'User Profile', icon: 'person', route: '/user-profile' },
    { name: 'Table List', icon: 'table_chart', route: '/table-list' },
    { name: 'Calendar', icon: 'calendar_today', route: '/calendar' },
    { name: 'Forms', icon: 'assignment', route: '/forms' },
  ];
}
