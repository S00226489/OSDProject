import { Component, OnInit } from '@angular/core';
import { SocietyService } from '../../services/society.service';
import { Society } from '../society';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  societies: Society[] = [];
  newSociety: Society = {
    name: '', // Initialize name as empty
    description: '', // Initialize description as empty
    events: [], // Example of a required property as an array
    members: [], // Example of a required property as an array
    contactEmail: '', // Example of a required property
    pictureUrl: '' // Add the picture URL property
    // Add other required properties as needed
  };

  constructor(private societyService: SocietyService, private router: Router) {}

  ngOnInit(): void {
    this.loadSocieties();
  }

  loadSocieties(): void {
    this.societyService.getAllSocieties().subscribe((data: Society[]) => {
      this.societies = data;
    });
  }

  addSociety(): void {
    this.societyService.createSociety(this.newSociety).subscribe(() => {
      // After successfully adding the society, reload the list
      this.loadSocieties();
      // Reset newSociety object for next addition
      this.newSociety = {
        name: '', // Reset name
        description: '', // Reset description
        events: [], // Reset events
        members: [], // Reset members
        contactEmail: '', // Reset contactEmail
        pictureUrl: '' // Reset pictureUrl
        // Add other required properties as needed
      };
    });
  }
  
}
