import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { StudentsModule } from './students/student.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from '@auth0/auth0-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { environment } from './environments/environments';
import { SocietiesModule } from './societies/societies.module';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component'; // Import NavbarComponent
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent, 
    LoginComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    StudentsModule,
    SharedModule,
    FormsModule,
    MatSelectModule,
    AuthModule.forRoot({
      ...environment.auth0,
      httpInterceptor: {
        allowedList: [
          {
            uri: `${environment.apiUri}/students/*`,
            httpMethod: 'PUT',
          },
          {
            uri: `${environment.apiUri}/students`,
            httpMethod: 'POST',
          },
          {
            uri: `${environment.apiUri}/students/*`,
            httpMethod: 'DELETE',
          },
          {
            uri: `${environment.apiUri}/societies/*`,
            httpMethod: 'GET', // Adjust the HTTP method as per your API
          },
          {
            uri: `${environment.apiUri}/societies`,
            httpMethod: 'POST',
          },
          // Add other societies endpoints as needed
        ]
      }
    }),
    ReactiveFormsModule,
    RouterModule,
    SocietiesModule // Add SocietiesModule to imports
  ]
})
export class AppModule { }
