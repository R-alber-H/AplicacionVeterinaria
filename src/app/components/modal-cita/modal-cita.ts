import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { mascota, clientes, cliente } from '../../datos/clientes';
import { Eventos } from '../../datos/eventos';

@Component({
  selector: 'app-modal-cita',
  imports: [FormsModule, CommonModule],
  templateUrl: './modal-cita.html',
  styleUrl: './modal-cita.css',
})
export class ModalCita {
  clientes: cliente[] = clientes;

  clienteSeleccionadoId: number | null = null;
  mascotasCliente: mascota[] = [];
  mascotaSeleccionadaId: number | null = null;

  titulo = '';
  descripcion = '';
  hora = '';

  private horaDisponible(nuevaCita: Date): boolean {
    const duracionMs = 60 * 60 * 1000; // 1 hora
    const inicioNueva = nuevaCita.getTime();
    const finNueva = inicioNueva + duracionMs;

    for (const ev of Eventos) {
      if (!ev.start) continue;

      const inicioExistente = new Date(ev.start).getTime();
      // si ev.end no existe, asumimos duración de 1 hora
      const finExistente = ev.end ? new Date(ev.end).getTime() : inicioExistente + duracionMs;

      if (inicioNueva < finExistente && finNueva > inicioExistente) {
        return false; // hay solapamiento
      }
    }

    return true; // disponible
  }

  // Cuando cambia el cliente
  cambiarCliente() {
    const clienteData = this.clientes.find((c) => c.id === this.clienteSeleccionadoId);
    this.mascotasCliente = clienteData ? clienteData.mascotas : [];
    this.mascotaSeleccionadaId = null; // resetear mascota
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
      alert('Debe rellenar todos los campos');
      return;
    }

    if (!this.clienteSeleccionadoId || !this.mascotaSeleccionadaId) {
      alert('Debe seleccionar cliente y mascota');
      return;
    }

    const fechaCompleta = new Date(this.data.fecha);
    const [horas, minutos] = this.hora.split(':').map(Number);
    fechaCompleta.setHours(horas, minutos, 0, 0);

    if (!this.horaDisponible(fechaCompleta)) {
      alert('Ya existe otra cita programada en ese horario.');
      return;
    }

    // Validación de hora mínima/máxima
    if (horas < 8 || horas > 17) {
      alert('La hora debe estar entre 08:00 y 17:00');
      return;
    }

    this.dialogRef.close({
      titulo: this.titulo,
      descripcion: this.descripcion,
      fecha: fechaCompleta,
      clienteId: this.clienteSeleccionadoId,
      mascotaId: this.mascotaSeleccionadaId,
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
