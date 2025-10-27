import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuarios } from '../../datos/usuarios';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  email: string = '';
  password: string = '';
  constructor(private router: Router) {}

  login() {
  const usuario = Usuarios.find(u => u.email === this.email && u.password === this.password);
  
  if (usuario) {
    localStorage.setItem('usuarioActual', JSON.stringify(usuario));
    localStorage.setItem('sesionActiva', 'true'); 
    this.router.navigate(['/clientes']);
  } else {
    alert('Credenciales incorrectas');
  }
}

logout() {
  localStorage.removeItem('usuarioActual');
  localStorage.removeItem('sesionActiva'); 
}
}
