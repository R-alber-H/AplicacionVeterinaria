import { Component } from '@angular/core';
import { Navbar } from "./componentes/navbar/navbar";
import { Footer } from "./componentes/footer/footer";

@Component({
  selector: 'app-home',
  imports: [Navbar, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
