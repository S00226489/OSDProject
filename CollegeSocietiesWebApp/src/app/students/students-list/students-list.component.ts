import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service'; 
import { Observable } from 'rxjs';
import { Student } from '../student'; 

@Component({
  selector: 'app-student-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  students$: Observable<Student[]> | undefined; 

  constructor(
    private studentService: StudentService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.students$ = this.studentService.getStudents(); 
  }

  navigateToStudent(id: string): void {
    this.router.navigate(['/students', id]); 
  }

  navigateToHome(): void {
    this.router.navigateByUrl('/');
  }
}
