import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./dashboard').then(m => m.Dashboard),
        children: [
            {
                path: 'teams',
                loadComponent: () => import('./pages/teams/teams').then(m => m.Teams)
            },
            {
                path: 'events',
                loadComponent: () => import('./pages/events/events').then(m => m.Events)
            }
        ]
    }
];
