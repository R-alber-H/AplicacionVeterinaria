import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-cita',
  imports: [FormsModule, CommonModule],
  templateUrl: './modal-cita.html',
  styleUrl: './modal-cita.css',
})
export class ModalCita {
  titulo = '';
  descripcion = '';
  hora = '';

  constructor(
    private dialogRef: MatDialogRef<ModalCita>,
    @Inject(MAT_DIALOG_DATA) public data: { fecha: Date }
  ) {}

  cerrar() {
    this.dialogRef.close();
  }

  guardar() {
    if (!this.titulo || !this.hora) return;

    // ✅ Combinar fecha seleccionada + hora ingresada
    const fechaCompleta = new Date(this.data.fecha);
    const [horas, minutos] = this.hora.split(':').map(Number);

    fechaCompleta.setHours(horas, minutos, 0, 0);

    this.dialogRef.close({
      titulo: this.titulo,
      descripcion: this.descripcion,
      fecha: fechaCompleta, // devuelve un objeto Date completo
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
