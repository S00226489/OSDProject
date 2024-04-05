import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Society } from '../societies/society';

@Injectable({
  providedIn: 'root'
})
export class SocietyService {
  private baseUrl = 'http://localhost:3000/api/v1/societies';

  constructor(private http: HttpClient) {}

  getAllSocieties(): Observable<Society[]> {
    return this.http.get<Society[]>(this.baseUrl);
  }

  getSocietyById(id: string): Observable<Society> {
    return this.http.get<Society>(`${this.baseUrl}/${id}`);
  }

  createSociety(society: Society): Observable<Society> {
    return this.http.post<Society>(this.baseUrl, society);
  }

  updateSociety(id: string, society: Society): Observable<Society> {
    return this.http.put<Society>(`${this.baseUrl}/${id}`, society);
  }

  deleteSociety(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
