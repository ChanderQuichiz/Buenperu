import { inject, Injectable } from '@angular/core';
import { event } from '../types/event';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  http = inject(HttpClient);
  saveEvent(event: event) {
    return this.http.post<event>('http://localhost:8010/events/save', event);
  }
  searchEvents(filter: string = '') {
    return this.http.get<any>('http://localhost:8010/events/search').pipe(map(response => response.content));
  }
}
