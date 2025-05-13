import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BienvenidosComponent } from "./componentes/bienvenidos/bienvenidos.component";

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sala_de_juegos';
}
