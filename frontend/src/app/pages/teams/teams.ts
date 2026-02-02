import { Component } from '@angular/core';
import { RecentMatches } from "../home/components/recent-matches/recent-matches";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";

@Component({
  selector: 'app-teams',
  imports: [RecentMatches, Footer, Header],
  templateUrl: './teams.html',
  styleUrl: './teams.css',
})
export class Teams {

}
