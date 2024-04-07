import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsListComponent } from './students/students-list/students-list.component';
import { StudentsDetailsComponent } from './students/students-details/students-details.component';
import { StudentsFormComponent } from './students/students-form/students-form.component';
import { ListComponent } from './societies/list/list.component';
import { DetailsComponent } from './societies/details/details.component'; 
import { FormComponent } from './societies/form/form.component'; 
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'students', component: StudentsListComponent },
  { path: 'students/form', component: StudentsFormComponent },
  { path: 'students/form/:id', component: StudentsFormComponent }, 
  { path: 'students/:id', component: StudentsDetailsComponent },
  { path: 'societies', component: ListComponent },
  { path: 'societies/:id', component: DetailsComponent },
  { path: 'societies/form', component: FormComponent },
  { path: 'societies/form/:id', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
