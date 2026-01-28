import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Table } from "./components/table/table";
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-leagues',
  imports: [Header,Table, Footer],
  templateUrl: './leagues.html',
  styleUrl: './leagues.css',
  standalone: true
})
export class Leagues {

}