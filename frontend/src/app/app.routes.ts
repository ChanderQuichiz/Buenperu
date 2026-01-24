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
        loadComponent: () => import('./pages/home/leagues/leagues').then(m => m.Leagues)
    }
];
