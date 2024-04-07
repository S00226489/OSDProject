import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.auth.user$.subscribe(res => console.log(res));
  }

  handleLogOut() {
    this.auth.logout();
  }

  handleLogIn() {
    this.auth.loginWithRedirect({
      appState: { target: this.document.location.pathname },
    });
  }

  navigateToStudents() {
    this.router.navigate(['/students']);
  }

  isHomepage(): boolean {
    return this.router.url === '/';
  }

  navigateToHome(): void {
    this.router.navigateByUrl('/');
  }
}
