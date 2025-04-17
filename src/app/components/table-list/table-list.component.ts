import { Component } from '@angular/core';

export interface TableItem {
  id: number;
  name: string;
  position: string;
  office: string;
  age: number;
  startDate: Date;
  salary: number;
}

@Component({
  selector: 'app-table-list',
  standalone: false,
  templateUrl: './table-list.component.html',
  styleUrl: './table-list.component.css'
})
export class TableListComponent {
  displayedColumns: string[] = ['id', 'name', 'position', 'office', 'age', 'startDate', 'salary', 'actions'];

  dataSource: TableItem[] = [
    {
      id: 1,
      name: 'Andrea Andrie Angelo',
      position: 'Database Designer',
      office: 'Sta. Rosa',
      age: 23,
      startDate: new Date(2025, 1, 15),
      salary: 180000,
    },
    {
      id: 2,
      name: 'Krisha Anne Corpuz',
      position: 'Project Manager',
      office: 'San Pablo',
      age: 25,
      startDate: new Date(2025, 0, 10),
      salary: 180000,
    },
    {
      id: 3,
      name: 'Deanne Maglalang',
      position: 'UI/UX Designer',
      office: 'San Pablo',
      age: 28,
      startDate: new Date(2025, 1, 22),
      salary: 180000,
    },
    {
      id: 4,
      name: 'Dan Edward Matundan',
      position: 'Backend Developer',
      office: 'Alaminos',
      age: 22,
      startDate: new Date(2025, 2, 5),
      salary: 180000,
    },
    {
      id: 5,
      name: 'Jhon Carl Reyes',
      position: 'Frontend Developer',
      office: 'San Pablo',
      age: 23,
      startDate: new Date(2025, 2, 18),
      salary: 180000,
    },
  ];
}
