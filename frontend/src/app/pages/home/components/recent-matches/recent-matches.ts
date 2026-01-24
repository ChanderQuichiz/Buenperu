import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

interface Match {
    homeTeam: string;
    awayTeam: string;
    score: string;
    date: string;
    competition: string;
}

@Component({
    selector: 'app-recent-matches',
    templateUrl: './recent-matches.html',
    styleUrls: ['./recent-matches.css'],
    standalone: true,
    imports: [TableModule, CommonModule]
})
export class RecentMatches implements OnInit {
    matches: Match[] = [];

    ngOnInit() {
        this.matches = [
            {
                homeTeam: 'Universitario',
                awayTeam: 'Alianza Lima',
                score: '2 - 1',
                date: '23 Ene 2026',
                competition: 'Liga 1'
            },
            {
                homeTeam: 'Sporting Cristal',
                awayTeam: 'Melgar',
                score: '1 - 1',
                date: '23 Ene 2026',
                competition: 'Liga 1'
            },
            {
                homeTeam: 'Cienciano',
                awayTeam: 'Cusco FC',
                score: '3 - 0',
                date: '22 Ene 2026',
                competition: 'Liga 1'
            },
            {
                homeTeam: 'Mannucci',
                awayTeam: 'UTC',
                score: '0 - 2',
                date: '22 Ene 2026',
                competition: 'Liga 1'
            },
            {
                homeTeam: 'Sport Boys',
                awayTeam: 'Binacional',
                score: '1 - 3',
                date: '21 Ene 2026',
                competition: 'Liga 1'
            }
        ];
    }
}