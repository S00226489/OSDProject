import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SocietyService } from '../../services/society.service';
import { Society } from '../society';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  society: Society | null = null;

  constructor(private societyService: SocietyService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const societyId = this.route.snapshot.paramMap.get('id');
    if (societyId) {
      this.societyService.getSocietyById(societyId).subscribe({
        next: (data) => this.society = data,
        error: (err) => console.error(err)
      });
    }
  }

  goBackToList(): void {
    this.router.navigate(['/societies']); // Navigate back to the list component
  }
}
