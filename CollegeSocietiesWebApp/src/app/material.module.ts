import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar'; 


@NgModule({
  declarations: [],
  imports: [MatToolbarModule, MatCardModule, MatFormFieldModule,  MatInputModule, MatIconModule, MatDialogModule,
    MatSnackBarModule],
  exports: [MatToolbarModule, MatCardModule, MatFormFieldModule,  MatInputModule, MatIconModule, MatDialogModule,
    MatSnackBarModule]
})
export class MaterialModule { }