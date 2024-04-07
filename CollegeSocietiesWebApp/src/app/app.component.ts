import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';
import { LogoutOptions } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Part 2';
  isAdmin: boolean = false; // Initialize isAdmin flag

  // Define the loggedOutContent template variable
  loggedOutContent: any; // You can replace 'any' with the type of your template variable

  // Define the user property
  user: any; // You can replace 'any' with the type of your user object

  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth.user$.subscribe((res: any) => {
      this.user = res; // Assign the user object to the user property
      console.log(res);
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

  navigateToSocieties(): void {
    this.router.navigate(['/societies']); // Adjust the route as necessary
  }

  isHomepage(): boolean {
    return this.router.url === '/';
  }

  navigateToHome(): void {
    this.router.navigateByUrl('/');
  }

  // Function to toggle between admin and user view
  toggleAdminView(): void {
    // Redirect to appropriate route based on user's view
    if (this.isAdmin) {
      this.router.navigate(['/admin']); // Change the route to the admin view
    } else {
      this.router.navigate(['/societies']); // Change the route to the user view
    }
  }
}
