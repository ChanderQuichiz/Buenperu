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
        loadChildren: () => import('./pages/search/search.routes').then(m => m.routes)
    },

    {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.routes').then(m => m.routes)
    },
    {
        path: 'tournaments',
        loadComponent: () => import('./pages/tournaments/tournaments').then(m => m.Tournaments)
    },
    {
        path: 'teams',
        loadComponent: () => import('./pages/teams/teams').then(m => m.Teams)
    }
  
];
