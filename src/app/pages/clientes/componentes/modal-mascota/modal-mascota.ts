
import { Component, Input } from '@angular/core';
import { mascota, cliente, especies } from '../../../../datos/clientes';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-mascota',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal-mascota.html',
  styleUrl: './modal-mascota.css',
})
export class ModalMascota {

  especies = especies;
  modalAbierto = false;

  @Input() cliente?: cliente;

  mascota: mascota = {
    id: 0,
    nombre: '',
    especie: '',
    raza: '',
    edad: 0,
    foto: 'perro2.jpg'
  };

  abrirModal() {
    this.modalAbierto = true;
  }

  registrar() {
    if (!this.cliente) {
      console.log('No se ha seleccionado un cliente.');
      return;
    }

    const id =this.cliente.mascotas.length > 0 ? Math.max(...this.cliente.mascotas.map(m => m.id)) + 1 : 1;

    this.mascota.id = id;
    this.cliente.mascotas.push({ ...this.mascota });

    console.log('Mascota registrada:', this.mascota);
    console.log('Cliente actualizado:', this.cliente);

    this.mascota = { id: 0, nombre: '', especie: '', raza: '', edad: 0, foto: 'perro2.jpg' };
    this.cerrarModal();
  }

  cerrarModal() {
    this.modalAbierto = false;
  }
}