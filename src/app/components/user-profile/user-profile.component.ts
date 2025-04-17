import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: false,
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  user = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    role: 'Administrator',
    company: 'Power Team Inc.',
    location: 'San Pablo City, Laguna, Philippines',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.',
    joinDate: new Date(2020, 5, 15),
  };
}
