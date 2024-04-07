import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { RouterModule } from '@angular/router'; // Import RouterModule
import { SocietyService } from '../services/society.service';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListComponent, DetailsComponent, FormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule, // Add ReactiveFormsModule
    RouterModule, // Add RouterModule
    FormsModule
  ],
  providers: [SocietyService]
})
export class SocietiesModule {}
