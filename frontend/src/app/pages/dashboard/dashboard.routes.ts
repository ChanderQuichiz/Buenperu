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
            },
            {
                path: 'settings',
                loadComponent: () => import('./pages/settings/settings').then(m => m.Settings)
            },
            {
                path: 'requests',
                loadComponent: () => import('./pages/requests/requests').then(m => m.Requests)
            },
            {
                path: 'calendar',
                loadComponent: () => import('./pages/events/pages/calendar/calendar').then(m => m.Calendar)
            }
        ]
    }
];
