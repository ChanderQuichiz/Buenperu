import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [InputGroupModule, ButtonModule, InputTextModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Header {

}
