import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentService } from '../student.service'; 
import { Router } from '@angular/router';
import { Student } from '../student'; 



@Component({
  selector: 'app-student-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.css']
})
export class StudentsFormComponent implements OnInit {
  @Input() student?: Student; 

  studentForm: FormGroup = new FormGroup({}); 

  message: string = ''; 

  constructor(private studentService: StudentService, private router: Router) {}

  ngOnInit(): void {
    // Initialize the studentForm with the student data if provided
    this.studentForm = new FormGroup({
      name: new FormControl(this.student?.name, [Validators.required, Validators.minLength(3)]),
      studentNumber: new FormControl(this.student?.studentNumber, [Validators.required, Validators.pattern('^ss[0-9]+$')]),
      email: new FormControl(this.student?.email, [Validators.required, Validators.email])
    });
  }

  onSubmit(){
    console.log('form submitted with ');
    console.table(this.studentForm.value); 
    
    if (!this.student){
      this.addNewStudent(this.studentForm.value)
    } else {
      this.updateStudent(this.student._id, this.studentForm.value)
    }
  }

  addNewStudent(newStudent: Student): void {
    this.studentService.addStudent(newStudent).subscribe({
      next: (student) => {
        console.log('adding new student ' + JSON.stringify(newStudent));
        this.router.navigateByUrl('/students/' + student._id); 
      },
      error: (err) => {
        this.message = 'Error adding student';
        console.error(err);
      }
    });
  }

  updateStudent(id: string, updatedValues: Student) {
    this.studentService.updateStudent(id, {...updatedValues})
    .subscribe({
      next: student => {   
        this.router.navigateByUrl('/students');
      },
      error: (err) => this.message = err
    }); 
  }

}
