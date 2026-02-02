import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Button } from "primeng/button";
import { TableModule } from "primeng/table";
import { SelectModule } from "primeng/select";
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { DatePicker } from "primeng/datepicker";
import { InputNumberModule } from 'primeng/inputnumber';
@Component({
  selector: 'app-calendar',
  imports: [Button,InputNumberModule, TableModule, SelectModule, InputTextModule, CardModule, DialogModule, DatePicker],
  templateUrl: './calendar.html',
  styleUrl: './calendar.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Calendar {
  playrollOptions:string[] = [
    "Jose alvarez",
    "Luis Ramirez",
    "Carlos Mendoza",
    "Andres Soto",
    "Miguel Torres"
  ]
  statusOptions:string[] = [
    "scheduled",
    "in_progress",
    "completed",
    "canceled"
  ]
  teams: string[] = [
    "Team A",
    "Team B",
    "Team C"
  ]
  products =[
    {code: 'P100'},
    {code: 'P200'},
  ]
  countries = [
     { name: 'Australia', code: 'AU' },
            { name: 'Brazil', code: 'BR' },
            { name: 'China', code: 'CN' },
            { name: 'Egypt', code: 'EG' },
            { name: 'France', code: 'FR' },
            { name: 'Germany', code: 'DE' },
            { name: 'India', code: 'IN' },
            { name: 'Japan', code: 'JP' },
            { name: 'Spain', code: 'ES' },
            { name: 'United States', code: 'US' }
  ]
selectedCountry : {name: string, code: string} = this.countries[0];
visible = false;
showDialog() {
    this.visible = true;
  }
}

