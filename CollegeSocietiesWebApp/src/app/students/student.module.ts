import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentsRoutingModule } from '../student-routing.module';
import { StudentsFormComponent } from './students-form/students-form.component';
import { MaterialModule } from '../material.module';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsDetailsComponent } from './students-details/students-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [StudentsFormComponent, StudentsListComponent, StudentsDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StudentsRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
   
  ]
})
export class StudentsModule { }
