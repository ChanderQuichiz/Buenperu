import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home').then(m => m.Home)
    },
    {
        path: 'signin',
        loadComponent: () => import('./pages/signin/signin').then(m => m.Signin)
    },
    {
        path: 'signup',
        loadComponent: () => import('./pages/signup/signup').then(m => m.Signup)
    },
    {
        path: 'leagues',
        loadComponent: () => import('./pages/leagues/leagues').then(m => m.Leagues)
    },
    {
        path: 'search',
        loadComponent: () => import('./pages/search/search').then(m => m.Search)
    },
    {
        path: 'tournaments',
        loadComponent: () => import('./pages/tournaments/tournaments').then(m => m.Tournaments)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.routes').then(m => m.routes)
    },
    {
        path: 'leagues',
        loadComponent: () => import('./pages/leagues/leagues').then(m => m.Leagues)
    }
];
