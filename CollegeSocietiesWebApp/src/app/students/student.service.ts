import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from '../environments/environments';
import { Student } from './student'; 

@Injectable({
  providedIn: 'root'
})
export class StudentService { 
  private dataUri = `${environment.apiUri}/students`; 

  constructor(private http: HttpClient) { }

  // Calls GET /students
  getStudents(): Observable<Student[]> { 
    console.log("get students called");
    const options = {
      headers: new HttpHeaders().set('X-API-key', 'abcde12345'),
    
    };

    return this.http.get<Student[]>(`${this.dataUri}`, options)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  // Gets a single student by ID
  getStudent(id: string): Observable<Student> { 
    let studentURI = `${this.dataUri}/${id}`;
    console.log(studentURI);

    return this.http.get<Student>(studentURI)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  // Adds a new student. POST /students
  addStudent(student: Student): Observable<Student> { 
    return this.http.post<Student>(this.dataUri, student)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Deletes a student. DELETE /students/:id
  deleteStudent(id: string): Observable<unknown> { 
    const url = `${this.dataUri}/${id}`;
    return this.http.delete(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Updates a student. PUT /students/:id
  updateStudent(id: string, student: Student): Observable<Student> { 
    console.log('subscribing to update/' + id);
    let studentURI: string = this.dataUri + '/' + id;
    return this.http.put<Student>(studentURI, student)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Error handling
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
