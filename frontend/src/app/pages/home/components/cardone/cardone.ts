import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-cardone',
  imports: [CardModule, RouterLink],
  templateUrl: './cardone.html',
  styleUrl: './cardone.css',
})
export class Cardone {

}
