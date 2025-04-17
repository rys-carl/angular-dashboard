import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: false,
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  user = {
    name: 'HackerMan_101',
    email: 'hackxss@example.com',
    role: 'Administrator',
    company: 'Power Team Inc.',
    location: 'San Pablo City, Laguna, Philippines',
    bio: 'Awiwii~',
    joinDate: new Date(2020, 5, 15),
  };
}
