import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DatePicker } from 'primeng/datepicker';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { Select } from 'primeng/select';

@Component({
  selector: 'app-events',
  imports: [CommonModule, ButtonModule, DialogModule, InputTextModule, Select, DatePicker],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
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
