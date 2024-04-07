import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import { LogoutOptions } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: any;
  isAdmin: boolean = false;

  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth.user$.subscribe((res: any) => {
      this.user = res;
      this.isAdmin = this.user && this.user.role === 'admin';
    });
  }

  handleLogOut() {
    this.auth.logout({ returnTo: document.location.origin } as LogoutOptions);
  }

  handleLogIn() {
    this.auth.loginWithRedirect({
      appState: { target: document.location.pathname },
    });
  }

  navigateToStudents() {
    this.router.navigate(['/students']);
  }

  navigateToSocieties() {
    this.router.navigate(['/societies']);
  }

  isHomepage(): boolean {
    return this.router.url === '/';
  }

  navigateToHome(): void {
    this.router.navigateByUrl('/');
  }
}
