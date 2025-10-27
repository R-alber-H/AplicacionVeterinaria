import { Component } from '@angular/core';
import { TablaClientes } from './componentes/tabla-clientes/tabla-clientes';
import { ModalCliente } from './componentes/modal-cliente/modal-cliente';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [TablaClientes,ModalCliente],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class Clientes {

}
