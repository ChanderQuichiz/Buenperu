import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Result } from "./components/result/result";
import { Header } from '../../components/header/header';

@Component({
  selector: 'app-search',
  imports: [Result, Header],
  templateUrl: './search.html',
  styleUrl: './search.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Search {

}
