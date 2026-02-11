import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputText } from "primeng/inputtext";
import { SelectModule } from 'primeng/select';
import { AccountService } from '../../../../services/account-service';
import { account } from '../../../../types/account';

@Component({
  selector: 'app-settings',
  imports: [InputText, FormsModule, SelectModule, ButtonModule],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings implements OnInit {
  service = inject(AccountService);
selectedDistrict: string = '';
distrities: string[] = [];
ngOnInit(): void {
  this.distrities = [
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
  "Lurigancho",
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
];
}

account = signal<account>(JSON.parse(localStorage.getItem('account') || '{}'));
accountform = signal<account>(this.account())
writeForm(event: Event) {
  const target = event.target as HTMLInputElement;
  this.accountform.set({
    ...this.accountform(),
    [target.name]: target.value
  });
}
sendForm() {
  this.service.saveAccount(this.accountform()).subscribe(
    (response) => {
      console.log('Account updated successfully', response);
      localStorage.setItem('account', JSON.stringify(response));
    }
  )
}
}
