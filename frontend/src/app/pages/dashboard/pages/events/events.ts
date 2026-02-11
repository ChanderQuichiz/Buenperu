import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {  DatePickerModule } from 'primeng/datepicker';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { event } from '../../../../types/event';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EventService } from '../../../../services/event-service';
import { TableModule } from "primeng/table";

@Component({
  selector: 'app-events',
  imports: [CommonModule, ButtonModule, ReactiveFormsModule, DialogModule, InputTextModule, SelectModule, DatePickerModule, TableModule],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events implements OnInit {
 service = inject(EventService);
visible = false;
  eventForm!: FormGroup;
 events = signal<event[]>([]);
   distrities = [
    {label: 'Ancón', value: 'Ancón'},
    {label: 'Ate', value: 'Ate'},
    {label: 'Barranco', value: 'Barranco'},
    {label: 'Breña', value: 'Breña'},
    {label: 'Carabayllo', value: 'Carabayllo'},
    {label: 'Chaclacayo', value: 'Chaclacayo'},
    {label: 'Chorrillos', value: 'Chorrillos'},
    {label: 'Cieneguilla', value: 'Cieneguilla'},
    {label: 'Comas', value: 'Comas'},
    {label: 'El Agustino', value: 'El Agustino'},
    {label: 'Independencia', value: 'Independencia'},
    {label: 'Jesús María', value: 'Jesús María'},
    {label: 'La Molina', value: 'La Molina'},
    {label: 'La Victoria', value: 'La Victoria'},
    {label: 'Lima', value: 'Lima'},
    {label: 'Lince', value: 'Lince'},
    {label: 'Los Olivos', value: 'Los Olivos'},
    {label: 'Lurigancho', value: 'Lurigancho'},
    {label: 'Lurín', value: 'Lurín'},
    {label: 'Magdalena del Mar', value: 'Magdalena del Mar'},
    {label: 'Miraflores', value: 'Miraflores'},
    {label: 'Pachacámac', value: 'Pachacámac'},
    {label: 'Pucusana', value: 'Pucusana'},
    {label: 'Pueblo Libre', value: 'Pueblo Libre'},
    {label: 'Puente Piedra', value: 'Puente Piedra'},
    {label: 'Punta Hermosa', value: 'Punta Hermosa'},
    {label: 'Punta Negra', value: 'Punta Negra'},
    {label: 'Rímac', value: 'Rímac'},
    {label: 'San Bartolo', value: 'San Bartolo'},
    {label: 'San Borja', value: 'San Borja'},
    {label: 'San Isidro', value: 'San Isidro'},
    {label: 'San Juan de Lurigancho', value: 'San Juan de Lurigancho'},
    {label: 'San Juan de Miraflores', value: 'San Juan de Miraflores'},
    {label: 'San Luis', value: 'San Luis'},
    {label: 'San Martín de Porres', value: 'San Martín de Porres'},
    {label: 'San Miguel', value: 'San Miguel'},
    {label: 'Santa Anita', value: 'Santa Anita'},
    {label: 'Santa María del Mar', value: 'Santa María del Mar'},
    {label: 'Santa Rosa', value: 'Santa Rosa'},
    {label: 'Santiago de Surco', value: 'Santiago de Surco'},
    {label: 'Surquillo', value: 'Surquillo'},
  ];

  eventTypes = [
    { label: 'League', value: 'league' },
    { label: 'Tournament', value: 'tournament' },
    { label: 'Friendly', value: 'friendly' }
  ];
 sportTypes = [
    { label: 'Football', value: 'football' },
    { label: 'Basketball', value: 'basketball' },
    { label: 'Volleyball', value: 'volleyball' }
 ]
  categories = [
    { label: 'sub-12', value: 'sub-12' },
    { label: 'sub-15', value: 'sub-15' },
    { label: 'sub-18', value: 'sub-18' },
    { label: 'sub-21', value: 'sub-21' },
    { label: 'open', value: 'open' }
  ];
  statusOptions = [
    { label: 'Draft', value: 'draft' },
    { label: 'Active', value: 'active' },
    { label: 'Finished', value: 'finished' }
  ];
 showDialog() {
    this.visible = true;
  }
  constructor(private fb: FormBuilder) {}
  loadEvents() {
    this.service.searchEvents().subscribe(data => {
      this.events.set(data);
    });
  }
  ngOnInit() {
        this.loadEvents();

    this.eventForm = this.fb.group({
      name: [''],
      eventSrc: [''],
      eventType: [null],
      sportType: [null],
      district: [null],
      category: [null],
      startDate: [null],
      endDate: [null],
      pointsWin: [0],
      pointsDraw: [0],
      pointsLoss: [0],
      maxTeams: [null],
      status: [null]
    });
  }

 

  sendForm() {
    this.service.saveEvent(this.eventForm.value).subscribe(
      response => {
        console.log('Event saved successfully', response);
        this.visible = false;
        this.eventForm.reset();
        this.loadEvents();
      },
      error => {
        console.error('Error saving event', error);
      }
    );
  }
}
