import { Component } from '@angular/core';

interface CalendarEvent {
  id: number;
  title: string;
  date: Date;
  type: 'meeting' | 'deadline' | 'reminder';
  description: string;
}

@Component({
  selector: 'app-calendar',
  standalone: false,
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {
  selected: Date | null = new Date();

  events: CalendarEvent[] = [
    {
      id: 1,
      title: 'Team Meeting',
      date: new Date(2023, 6, 15, 10, 0),
      type: 'meeting',
      description: 'Weekly team sync',
    },
    {
      id: 2,
      title: 'Project Deadline',
      date: new Date(2023, 6, 20, 18, 0),
      type: 'deadline',
      description: 'Submit final deliverables',
    },
  ];

  get todaysEvents(): CalendarEvent[] {
    if (!this.selected) return [];

    return this.events.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getDate() === this.selected?.getDate() &&
        eventDate.getMonth() === this.selected?.getMonth() &&
        eventDate.getFullYear() === this.selected?.getFullYear()
      );
    });
  }

  getEventTypeIcon(type: string): string {
    switch (type) {
      case 'meeting':
        return 'groups';
      case 'deadline':
        return 'event_busy';
      case 'reminder':
        return 'notifications';
      default:
        return 'event';
    }
  }

  getEventTypeColor(type: string): string {
    switch (type) {
      case 'meeting':
        return '#3f51b5';
      case 'deadline':
        return '#f44336';
      case 'reminder':
        return '#ff9800';
      default:
        return '#757575';
    }
  }

  formatTime(date: Date): string {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
}
