import { Component, OnInit } from '@angular/core';
import { SocietyService } from '../../services/society.service';
import { Society } from '../society';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  societies: Society[] = [];

  constructor(private societyService: SocietyService) {}

  ngOnInit(): void {
    this.societyService.getAllSocieties().subscribe((data: Society[]) => {
      this.societies = data;
    });
  }
}
