import { Component } from '@angular/core';
import { Cardone } from "./components/cardone/cardone";
import { ScrollerModule } from 'primeng/scroller';
import { OrderListModule } from 'primeng/orderlist';
import { Cardtwo } from "./components/cardtwo/cardtwo";
import { Matchestable } from "./components/matchestable/matchestable";
import { Matchescarousel } from "./components/matchescarousel/matchescarousel";
import { DrawerPositionDemo } from "../../components/drawer-position-demo/drawer-position-demo";
@Component({
  selector: 'app-home',
  imports: [Cardone, ScrollerModule, OrderListModule, Cardtwo, Matchestable, Matchescarousel, DrawerPositionDemo],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
