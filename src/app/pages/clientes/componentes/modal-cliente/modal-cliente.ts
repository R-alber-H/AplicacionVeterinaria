import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { clientes } from '../../../../datos/clientes';
import { cliente, mascota, especies } from '../../../../datos/clientes';

@Component({
  selector: 'app-modal-cliente',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal-cliente.html',
  styleUrl: './modal-cliente.css',
})
export class ModalCliente {

  especies = especies;

  clientesActuales = clientes;

  cliente: cliente = {
    id: 0,
    nombres: '',
    apellidos: '',
    dni: '',
    email: '',
    telefono: '',
    mascotas: [],
  };

  mascota: mascota = {
    id: 0,
    nombre: '',
    especie: '',
    raza: '',
    edad: 0,
    foto: 'perro2.jpg'
  };

  registrar() {

    this.cliente.id = this.clientesActuales.length + 1;
    this.mascota.id = this.cliente.mascotas.length + 1;

    this.cliente.mascotas.push(this.mascota);

    this.clientesActuales.push(this.cliente);

    console.log('Cliente registrado:', this.cliente);

    this.limpiarFormulario();
    
    this.cerrarModal();
  }

  limpiarFormulario() {
    this.cliente = {
      id: 0,
      nombres: '',
      apellidos: '',
      dni: '',
      email: '',
      telefono: '',
      mascotas: []
    };
    this.mascota = {
      id: 0,
      nombre: '',
      especie: '',
      raza: '',
      edad: 0,
      foto: ''
    };
  }

  modalAbierto = false;

  abrirModal() {
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
  }
}
