import { Component, inject, input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { Select, SelectModule } from 'primeng/select';
import { team } from '../../../../types/team';
import { FormsModule } from "@angular/forms";
import { TeamService } from '../../../../services/team-service';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-teams',
  imports: [CommonModule,TableModule, ButtonModule, DialogModule, InputTextModule, SelectModule , FormsModule],
  templateUrl: './teams.html',
  styleUrl: './teams.css',
})
export class Teams implements OnInit {
  account = JSON.parse(localStorage.getItem('account') || '{}');
  visible: boolean = false;
  teamservice = inject(TeamService);
  teamform = signal<team>({
    name: '',
    district: '',
    sportType: '',
    iconSrc: '',
   account: { accountId: this.account.accountId }
  });

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

  writeRequest(event: Event):void {
    const target = event.target as HTMLInputElement;

    this.teamform.set(({
      ...this.teamform(),
      [target.name]: target.value
    }));
  }
    sportTypes : string[] = [
    "Soccer",
    "Basketball",
    "Volleyball"
  ];
  showDialog() {
    this.visible = true;
  }
 sendRequest() {
    console.log(this.teamform());
    this.teamservice.saveTeam(this.teamform()).subscribe(
      (response) => {
        console.log('Team created successfully', response);
        this.visible = false;
        this.loadTeams();
      }
    )
  }
 
  teams = signal<team[]>([]);
  loadTeams() {
    this.teamservice.searchTeams().subscribe(data => {
      this.teams.set(data);
    });
}
  ngOnInit(): void {
  this.loadTeams();
  }
  
  selectedSport: team["sportType"]; ;
  selectedDistrict: team["district"]; ;
}
