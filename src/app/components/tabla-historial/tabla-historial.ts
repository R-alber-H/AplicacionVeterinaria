import { Component } from '@angular/core';
import { clientes } from '../../datos/clientes';
import { Eventos } from '../../datos/eventos';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface EventoHistorial {
  fecha: string;
  hora: string;
  cliente: string;
  mascota: string;
  tipo: string;
  descripcion: string;
}

@Component({
  selector: 'app-tabla-historial',
  imports: [FormsModule, CommonModule],
  templateUrl: './tabla-historial.html',
  styleUrl: './tabla-historial.css',
})
export class TablaHistorial {
  eventos = Eventos;
  clientes = clientes;
  filtroNombre = '';

  get eventosFiltrados(): EventoHistorial[] {
    return this.eventos
      .map((ev) => {
        const clienteData = this.clientes.find((c) => c.id === ev.meta.clienteId);
        const mascotaData = clienteData?.mascotas.find((m) => m.id === ev.meta.mascotaId);
        return {
          fecha: ev.start.toLocaleDateString(),
          hora: ev.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          cliente: clienteData ? `${clienteData.nombres} ${clienteData.apellidos}` : 'Desconocido',
          mascota: mascotaData ? mascotaData.nombre : 'Desconocido',
          tipo: ev.title,
          descripcion: ev.meta.description,
        };
      })
      .filter((ev) => ev.cliente.toLowerCase().includes(this.filtroNombre.toLowerCase()));
  }
}
