// admin.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  isAdmin: boolean = false;

  constructor() { }

  toggleAdminMode(): void {
    this.isAdmin = !this.isAdmin;
  }
}
