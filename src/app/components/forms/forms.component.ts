import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  standalone: false,
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  forms = [
    { id: 1, name: "Employee Registration Form", fileType: "PDF", fileSize: "245 KB" },
    { id: 2, name: "Expense Claim Form", fileType: "DOCX", fileSize: "132 KB" },
    { id: 3, name: "Leave Application Form", fileType: "PDF", fileSize: "187 KB" },
    { id: 4, name: "Project Proposal Template", fileType: "DOCX", fileSize: "215 KB" },
    { id: 5, name: "Performance Review Form", fileType: "PDF", fileSize: "198 KB" },
    { id: 6, name: "Travel Request Form", fileType: "PDF", fileSize: "156 KB" },
    { id: 7, name: "Equipment Request Form", fileType: "PDF", fileSize: "142 KB" },
  ]

  getFileIcon(fileType: string): string {
    switch (fileType.toLowerCase()) {
      case "pdf":
        return "picture_as_pdf"
      case "docx":
        return "description"
      case "xlsx":
        return "table_chart"
      default:
        return "insert_drive_file"
    }
  }
}
