import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { RecentMatches } from "../home/components/recent-matches/recent-matches";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-tournaments',
  imports: [Header, RecentMatches, Footer],
  templateUrl: './tournaments.html',
  styleUrl: './tournaments.css',
})
export class Tournaments {

}
