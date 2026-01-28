import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

interface Team {
  name: string;
  points: number;
  gamesPlayed: number;
  wins: number;
  draw: number;
  loses: number;
  position: number;
}

@Component({
  selector: 'app-table',
  imports: [TableModule],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  teams: Team[] = [
    {
      name: 'Universitario',
      points: 45,
      gamesPlayed: 15,
      wins: 14,
      draw: 3,
      loses: 1,
      position: 1,
    },
    {
      name: 'Alianza Lima',
      points: 42,
      gamesPlayed: 15,
      wins: 12,
      draw: 6,
      loses: 2,
      position: 2,
    },
    {
      name: 'Sporting Cristal',
      points: 40,
      gamesPlayed: 15,
      wins: 11,
      draw: 7,
      loses: 3,
      position: 3,
    },
    {
      name: 'FBC Melgar',
      points: 38,
      gamesPlayed: 15,
      wins: 10,
      draw: 8,
      loses: 4,
      position: 4,
    },
    {
      name: 'Municipal',
      points: 35,
      gamesPlayed: 15,
      wins: 9,
      draw: 8,
      loses: 6,
      position: 5,
    },
  ];
}
