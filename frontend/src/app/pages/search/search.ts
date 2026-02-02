import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from "../../components/footer/footer";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-search',
  imports: [ Header, Footer, RouterModule],
  templateUrl: './search.html',
  styleUrl: './search.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Search {

}
