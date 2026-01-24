import { Component } from '@angular/core';
import { Cardone } from "./components/cardone/cardone";
import { ScrollerModule } from 'primeng/scroller';
import { OrderListModule } from 'primeng/orderlist';
import { Cardtwo } from "./components/cardtwo/cardtwo";
import { Matchescarousel } from "./components/matchescarousel/matchescarousel";
import { DrawerPositionDemo } from "../../components/drawer-position-demo/drawer-position-demo";
import { Header } from "../../components/header/header";
import { RecentMatches } from "./components/recent-matches/recent-matches";
@Component({
  selector: 'app-home',
  imports: [Cardone, ScrollerModule, OrderListModule, Cardtwo, Matchescarousel, DrawerPositionDemo, Header, RecentMatches],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
