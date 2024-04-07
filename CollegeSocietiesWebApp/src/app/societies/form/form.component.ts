import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocietyService } from '../../services/society.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  societyForm: FormGroup;

  constructor(private fb: FormBuilder, private societyService: SocietyService, private router: Router) {
    this.societyForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.societyForm.valid) {
      this.societyService.createSociety(this.societyForm.value).subscribe({
        next: () => this.router.navigate(['/societies']),
        error: (err) => console.error(err)
      });
    }
  }
}
