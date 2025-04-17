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
      position: 'CEO',
      office: 'Sta. Rosa',
      age: 45,
      startDate: new Date(2015, 0, 15),
      salary: 180000,
    },
    {
      id: 2,
      name: 'Krisha Anne Corpuz',
      position: 'CTO',
      office: 'San Jose',
      age: 38,
      startDate: new Date(2016, 3, 10),
      salary: 170000,
    },
    {
      id: 3,
      name: 'Deanne Maglalang',
      position: 'CFO',
      office: 'San Pablo City',
      age: 42,
      startDate: new Date(2017, 5, 22),
      salary: 160000,
    },
    {
      id: 4,
      name: 'Dan Edward Matundan',
      position: 'COO',
      office: 'Alaminos',
      age: 40,
      startDate: new Date(2018, 7, 5),
      salary: 155000,
    },
    {
      id: 5,
      name: 'Jhon Carl Reyes',
      position: 'CIO',
      office: 'San Lucas',
      age: 36,
      startDate: new Date(2019, 9, 18),
      salary: 150000,
    },
  ];
}
