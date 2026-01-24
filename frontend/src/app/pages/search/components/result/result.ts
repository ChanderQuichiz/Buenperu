import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-result',
  imports: [ ButtonModule, CardModule],
  templateUrl: './result.html',
  styleUrl: './result.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Result {

}
