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
  sportTypes : string[] = [
    "Soccer",
    "Basketball",
    "Volleyball"
  ];
  categories: string[] = [
  "sub-12",
  "sub-14",
  "sub-16",
  "sub-18",
  "sub-20",
  "sub-23",
  "senior",
  "masters",
]
  distrities: string[] = [
  "Ancón",
  "Ate",
  "Barranco",
  "Breña",
  "Carabayllo",
  "Chaclacayo",
  "Chorrillos",
  "Cieneguilla",
  "Comas",
  "El Agustino",
  "Independencia",
  "Jesús María",
  "La Molina",
  "La Victoria",
  "Lima",
  "Lince",
  "Los Olivos",
  "Lurigancho-Chosica",
  "Lurín",
  "Magdalena del Mar",
  "Miraflores",
  "Pachacámac",
  "Pucusana",
  "Pueblo Libre",
  "Puente Piedra",
  "Punta Hermosa",
  "Punta Negra",
  "Rímac",
  "San Bartolo",
  "San Borja",
  "San Isidro",
  "San Juan de Lurigancho",
  "San Juan de Miraflores",
  "San Luis",
  "San Martín de Porres",
  "San Miguel",
  "Santa Anita",
  "Santa María del Mar",
  "Santa Rosa",
  "Santiago de Surco",
  "Surquillo",
  "Villa El Salvador",
  "Villa María del Triunfo"
]
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
