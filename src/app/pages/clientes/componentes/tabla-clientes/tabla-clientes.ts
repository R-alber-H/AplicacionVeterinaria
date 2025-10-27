
import { Component, ViewChild } from '@angular/core';
import { ModalMascota } from "../modal-mascota/modal-mascota";
import { clientes, cliente } from '../../../../datos/clientes';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-tabla-clientes',
  imports: [ModalMascota, RouterModule],
  templateUrl: './tabla-clientes.html',
  styleUrl: './tabla-clientes.css',
})
export class TablaClientes {
  clientes = clientes;
  clienteSeleccionado?: cliente;

  @ViewChild('modalMascota') modalMascota!: ModalMascota;

  abrirModal(cliente: cliente) {
    this.clienteSeleccionado = cliente;
    this.modalMascota.abrirModal();
  }
}