import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsListComponent } from './students/students-list/students-list.component';
import { StudentsDetailsComponent } from './students/students-details/students-details.component';
import { StudentsFormComponent } from './students/students-form/students-form.component';
import { ListComponent } from './societies/list/list.component';
import { DetailsComponent } from './societies/details/details.component'; // Adjust the path as needed
import { FormComponent } from './societies/form/form.component'; // Adjust the path as needed

const routes: Routes = [
  { path: 'students', component: StudentsListComponent },
  { path: 'students/form', component: StudentsFormComponent },
  { path: 'students/form/:id', component: StudentsFormComponent }, 
  { path: 'students/:id', component: StudentsDetailsComponent },
  // Existing Societies List Component
  { path: 'societies', component: ListComponent },
  // Add route for SocietyDetailsComponent
  { path: 'societies/:id', component: DetailsComponent },
  // Add route for SocietyFormComponent for adding a new society
  { path: 'societies/form', component: FormComponent },
  // Add route for SocietyFormComponent for editing an existing society
  { path: 'societies/form/:id', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
