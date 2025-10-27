import { Component } from '@angular/core';
import { cliente, clientes, mascota } from '../../datos/clientes';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-mascotas',
  standalone: true,
  imports: [],
  templateUrl: './detalle-mascotas.html',
  styleUrls: ['./detalle-mascotas.css'],
})

export class DetalleMascotas {

  clientesActuales = clientes
  clienteActual?: cliente;
  mascotas? :mascota[]=[];


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const idCliente = Number(this.route.snapshot.params['id']);
    this.clienteActual = this.clientesActuales.find(c => c.id === idCliente);
    this.mascotas = this.clienteActual?.mascotas;

  }

}
