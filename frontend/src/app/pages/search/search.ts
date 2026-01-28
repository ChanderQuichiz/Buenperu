import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Result } from "./components/result/result";
import { Header } from '../../components/header/header';
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-search',
  imports: [Result, Header, Footer],
  templateUrl: './search.html',
  styleUrl: './search.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Search {

}
