import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuarios } from '../../datos/usuarios';
import { validarLogin } from '../../validaciones/validacion-login';
import { SweetAlertService } from '../../sweetalert/sweetalert-servicio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  email: string = '';
  password: string = '';
  constructor(private router: Router) { }

  login() {

    const error = validarLogin(this.email, this.password);

    if (error) {
      SweetAlertService.error(error);
      return;
    }

    const usuario = Usuarios.find(u => u.email === this.email && u.password === this.password);

    if (usuario) {
      localStorage.setItem('usuarioActual', JSON.stringify(usuario));
      localStorage.setItem('sesionActiva', 'true');
      this.router.navigate(['/clientes']);
    } else {
      SweetAlertService.error('Credenciales incorrectas.');
    }
  }

  logout() {
    localStorage.removeItem('usuarioActual');
    localStorage.removeItem('sesionActiva');
  }
}
