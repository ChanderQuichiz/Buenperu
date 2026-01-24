import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-drawer-position-demo',
  imports: [CommonModule, ButtonModule, DrawerModule],
  templateUrl: './drawer-position-demo.html',
  styleUrl: './drawer-position-demo.css',
})
export class DrawerPositionDemo {
  visible4: boolean = false;
}