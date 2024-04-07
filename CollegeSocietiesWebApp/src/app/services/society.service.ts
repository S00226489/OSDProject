import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../environments/environments';
import { Society } from '../societies/society';

@Injectable({
  providedIn: 'root'
})
export class SocietyService {
  private dataUri = `${environment.apiUri}/societies`;

  constructor(private http: HttpClient) {}

  getAllSocieties(): Observable<Society[]> {
    return this.http.get<Society[]>(this.dataUri)
      .pipe(
        catchError(this.handleError)
      );
  }

  getSocietyById(id: string): Observable<Society> {
    return this.http.get<Society>(`${this.dataUri}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  createSociety(society: Society): Observable<Society> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    return this.http.post<Society>(this.dataUri, society, options)
      .pipe(
        catchError(this.handleError)
      );
  }

  updateSociety(id: string, society: Society): Observable<Society> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    return this.http.put<Society>(`${this.dataUri}/${id}`, society, options)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteSociety(id: string): Observable<unknown> {
    return this.http.delete(`${this.dataUri}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
