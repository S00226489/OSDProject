import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { StudentsModule } from './students/student.module'; // Include StudentsModule
import { SharedModule } from './shared/shared.module';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from './environments/environments';

@NgModule({
  declarations: [
    AppComponent,
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
        ]
      }
    }),
  ]
})
export class AppModule { }
