import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { MatDialog } from '@angular/material/dialog';

import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-student-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.css']
})
export class StudentsDetailsComponent implements OnInit {
  student: Student | undefined;
  message: string = ''; 
  id: string | null = null;
  showForm: boolean = false;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private studentService: StudentService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  
    if (this.id) {
      this.studentService.getStudent(this.id).subscribe({
        next: (value: Student) => (this.student = value),
        complete: () => console.log('student service finished'),
        error: (err) => {
          this.message = 'Error fetching student';
          console.error(err);
        }
      });
    }
  }

  openErrorSnackBar(message: string): void {
    this.snackBar.open(message, 'Dismiss', {
      duration: 15000,
      panelClass: ['error-snackbar']
    });
  }

  openConfirmDeleteDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '450px',
      data: {
        title: 'Delete Student ' + this.student?.name,
        message: 'Are you sure you want to delete this student?'
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result && this.student?._id) {
        this.deleteStudent();
      }
    });
  }

  deleteStudent() {
    if (this.student?._id) {
      this.studentService.deleteStudent(this.student._id).subscribe({
        next: (student) => {
          console.log(`${JSON.stringify(student)} has been deleted`);
          this.message = 'Student has been deleted';
          this.router.navigateByUrl('/students');
        },
        error: (emessage) => {
          this.openErrorSnackBar(this.message);
        }
      });
    }
  }

  editStudent() {
    this.showForm = true;
  }
}
