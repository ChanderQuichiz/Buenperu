import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./search').then(m => m.Search),
        children: [
            {
                path: 'events',
                loadComponent: () => import('./components/teamresult/teamresult').then(m => m.Teamresult)
            },
            {
                path: 'organizers',
                loadComponent: () => import('./components/result/result').then(m => m.Result)
            }
        ]
    }
];
