import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { team } from '../types/team';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  http = inject(HttpClient);
  saveTeam(team:team){
    return this.http.post('http://localhost:8010/teams/save', team);
  }
  searchTeams(filter: string = '') {
    return this.http.get<any>('http://localhost:8010/teams/search'+filter).pipe(map(response => response.content))
  }
}
