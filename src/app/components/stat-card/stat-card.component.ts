import { Component, Input } from '@angular/core'; // Added Input import

@Component({
  selector: 'app-stat-card',
  standalone: false,
  templateUrl: './stat-card.component.html',
  styleUrl: './stat-card.component.css'
})
export class StatCardComponent {
  @Input() title = '';
  @Input() value = '';
  @Input() icon = '';
  @Input() color = '#000';
  @Input() increase = true;
  @Input() percentage = '';
}