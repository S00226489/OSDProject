import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from './students/student'; // Assuming you have a Student class defined

@Injectable({
  providedIn: 'root',
})
export class DummycontactService {
  constructor() {}

  private dummyStudentsData: Student[] = [
    {
      _id: '123',
      name: 'Aiden Farrel',
      email: 'aidenfarrel@hotmail.com',
      studentNumber: '123456',
    },
    {
      _id: '234',
      name: 'Jane Dodge',
      email: 'jdond123@gmail.com',
      studentNumber: '0871232222',
    },
    {
      _id: '456',
      name: 'Una',
      email: 'una@gmail.com',
      studentNumber: '08712fd',
    },
  ];

  getStudents(): Observable<Student[]> {
    console.log('Dummy getStudents called');

    return of(this.dummyStudentsData);
  }
}
