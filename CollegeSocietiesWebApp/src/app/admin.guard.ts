// admin.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private adminService: AdminService, private router: Router) {}

  canActivate(): boolean {
    if (this.adminService.isAdmin) {
      return true; // Allow access if user is admin
    } else {
      this.router.navigate(['/societies']); // Redirect to societies page for non-admin users
      return false;
    }
  }
}
