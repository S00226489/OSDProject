import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsListComponent } from './students/students-list/students-list.component';
import { StudentsDetailsComponent } from './students/students-details/students-details.component';
import { StudentsFormComponent } from './students/students-form/students-form.component';

const routes: Routes = [
  { path: 'students', component: StudentsListComponent },
  { path: 'students/form', component: StudentsFormComponent },
  { path: 'students/form/:id', component: StudentsFormComponent }, 
  { path: 'students/:id', component: StudentsDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
