import { Component } from '@angular/core';
import {  Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,  
  imports: [RouterModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css'],
})
export class Sidebar {

  constructor(private router: Router) {}

  cerrarSesion(): void {
    localStorage.removeItem('usuarioActual');
    localStorage.removeItem('sesionActiva');
     this.router.navigate(['']);
  }
}
