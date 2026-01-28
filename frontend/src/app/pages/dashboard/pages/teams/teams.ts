import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { Select } from 'primeng/select';
import { DatePicker } from 'primeng/datepicker';

@Component({
  selector: 'app-teams',
  imports: [CommonModule, ButtonModule, DialogModule, InputTextModule, Select, DatePicker],
  templateUrl: './teams.html',
  styleUrl: './teams.css',
})
export class Teams {
  visible: boolean = false;
  
  eventTypes = [
    { label: 'League', value: 'league' },
    { label: 'Tournament', value: 'tournament' },
    { label: 'Friendly', value: 'friendly' }
  ];

  statusOptions = [
    { label: 'Draft', value: 'draft' },
    { label: 'Active', value: 'active' },
    { label: 'Finished', value: 'finished' }
  ];

  showDialog() {
    this.visible = true;
  }
}
