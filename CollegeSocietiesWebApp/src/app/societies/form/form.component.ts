import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { SocietyService } from '../../services/society.service'; // Adjust the path as needed
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule], // Correct imports here
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  societyForm: FormGroup;

  constructor(private fb: FormBuilder, private societyService: SocietyService, private router: Router) {
    this.societyForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      // Add more fields as necessary
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.societyForm.valid) {
      // Example: Creating a society
      this.societyService.createSociety(this.societyForm.value).subscribe({
        next: () => this.router.navigate(['/societies']), // Navigation after success
        error: (err) => console.error(err) // Handle errors
      });
    }
  }
}
