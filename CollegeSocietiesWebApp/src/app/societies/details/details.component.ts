import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocietyService } from '../../services/society.service';
import { Society } from '../society';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  society: Society | null = null;

  constructor(private societyService: SocietyService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const societyId = this.route.snapshot.paramMap.get('id');
    if (societyId) {
      this.societyService.getSocietyById(societyId).subscribe({
        next: (data) => this.society = data,
        error: (err) => console.error(err)
      });
    }
  }
}
