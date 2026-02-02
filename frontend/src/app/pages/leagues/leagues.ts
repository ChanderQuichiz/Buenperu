import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { Table } from "./components/table/table";
import { Footer } from '../../components/footer/footer';
import { RecentMatches } from "../home/components/recent-matches/recent-matches";
import { TabsModule } from 'primeng/tabs';
@Component({
  selector: 'app-leagues',
  imports: [Header, Table, Footer, RecentMatches, TabsModule],
  templateUrl: './leagues.html',
  styleUrl: './leagues.css',
  standalone: true
})
export class Leagues {

}