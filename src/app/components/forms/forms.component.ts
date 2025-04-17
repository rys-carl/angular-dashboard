import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  standalone: false,
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  departments = [
    'Engineering',
    'Marketing',
    'Sales',
    'Finance',
    'Human Resources',
    'Product',
    'Design',
    'Customer Support',
  ];
}
