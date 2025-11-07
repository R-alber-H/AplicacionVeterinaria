import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { mascota, clientes, cliente } from '../../datos/clientes';
import { Eventos,EventoMeta } from '../../datos/eventos';
import { SweetAlertService } from '../../sweetalert/sweetalert-servicio';
import { CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'app-modal-cita',
  imports: [FormsModule, CommonModule],
  templateUrl: './modal-cita.html',
  styleUrl: './modal-cita.css',
})
export class ModalCita {
  clientes: cliente[] = clientes;
  eventos: CalendarEvent<EventoMeta>[] = Eventos;
  

  clienteSeleccionadoId: number | null = null;
  mascotasCliente: mascota[] = [];
  mascotaSeleccionadaId: number | null = null;

  titulo = '';
  descripcion = '';
  hora = '';

  private horaDisponible(nuevaCita: Date): boolean {
    const duracionMs = 60 * 60 * 1000; 
    const inicioNueva = nuevaCita.getTime();
    const finNueva = inicioNueva + duracionMs;

    for (const ev of Eventos) {
      if (!ev.start) continue;

      const inicioExistente = new Date(ev.start).getTime();
      const finExistente = ev.end ? new Date(ev.end).getTime() : inicioExistente + duracionMs;

      if (inicioNueva < finExistente && finNueva > inicioExistente) {
        return false; 
      }
    }

    return true; 
  }

  cambiarCliente() {
    const clienteData = this.clientes.find((c) => c.id === this.clienteSeleccionadoId);
    this.mascotasCliente = clienteData ? clienteData.mascotas : [];
    this.mascotaSeleccionadaId = null; 
  }

  constructor(
    private dialogRef: MatDialogRef<ModalCita>,
    @Inject(MAT_DIALOG_DATA) public data: { fecha: Date }
  ) {}

  cerrar() {
    this.dialogRef.close();
  }

  guardar() {
    if (!this.titulo || !this.descripcion || !this.hora) {
      SweetAlertService.error('Debe rellenar todos los campos');
      return;
    }

    if (!this.clienteSeleccionadoId || !this.mascotaSeleccionadaId) {
      SweetAlertService.error('Debe seleccionar cliente y mascota');
      return;
    }

    const fechaCompleta = new Date(this.data.fecha);
    const [horas, minutos] = this.hora.split(':').map(Number);
    fechaCompleta.setHours(horas, minutos, 0, 0);

    if (!this.horaDisponible(fechaCompleta)) {
      SweetAlertService.error('Ya existe otra cita programada en ese horario.');
      return;
    }


    if (horas < 8 || horas > 17) {
      SweetAlertService.error('La hora debe estar entre 08:00 y 17:00');
      return;
    }

        this.eventos.push({
      title: this.titulo,
      start: fechaCompleta,
      end: new Date(fechaCompleta.getTime() + 60 * 60 * 1000),
      meta: {
        description: this.descripcion,
        clienteId: this.clienteSeleccionadoId!,
        mascotaId: this.mascotaSeleccionadaId!,
      },
    });

    this.dialogRef.close({
    });
  }

  ngOnInit() {
    const hora = this.data.fecha.toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
    this.hora = hora;
  }
}
