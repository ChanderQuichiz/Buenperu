import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { Component, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { Menu, MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';
import { MenuItem } from 'primeng/api';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
    imports: [ButtonModule, DrawerModule, AvatarModule, BadgeModule, MenuModule, RippleModule, RouterModule, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
    visible: boolean = false;
items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                separator: true
            },
            {
                label: 'Documents',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-plus',
                        routerLink: ['/dashboard']
                    },
                    {
                        label: 'Teams',
                        icon: 'pi pi-users',
                        routerLink: ['/dashboard/teams']
                    },
                    {
                        label: 'events',
                        icon: 'pi pi-calendar',
                        routerLink: ['/dashboard/events']
                    }
                ]
            },
            {
                label: 'Profile',
                items: [
                    {
                        label: 'Settings',
                        icon: 'pi pi-cog',
                        routerLink: ['/dashboard/settings']
                    },
                    {
                        label: 'Requests',
                        icon: 'pi pi-inbox',
                        badge: '2',
                        routerLink: ['/dashboard/requests']
                    },
                    {
                        label: 'Logout',
                        icon: 'pi pi-sign-out',
                        linkClass: '!text-red-500 dark:!text-red-400',
                        routerLink: ['/']
                    }
                ]
            },
            {
                separator: true
            }
        ];
    }
}

