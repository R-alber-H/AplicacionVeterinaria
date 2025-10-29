import { Component, ChangeDetectorRef } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import {
  CalendarEvent,
  CalendarView,
  CalendarMonthViewComponent,
  CalendarWeekViewComponent,
  CalendarDayViewComponent,
  CalendarPreviousViewDirective,
  CalendarNextViewDirective,
  CalendarTodayDirective,
  provideCalendar,
  CalendarDatePipe,
  DateAdapter,
} from 'angular-calendar';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { Eventos } from '../../datos/eventos';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ModalCita } from '../modal-cita/modal-cita';

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [
    CalendarMonthViewComponent,
    CalendarWeekViewComponent,
    CalendarDayViewComponent,
    CalendarPreviousViewDirective,
    CalendarNextViewDirective,
    CalendarTodayDirective,
    CalendarDatePipe,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [
    provideCalendar({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  templateUrl: './calendario.html',
  styleUrl: './calendario.css',
})
export class Calendario {
  // 👇 Vista inicial: Semana actual
  view: CalendarView = CalendarView.Week;
  viewDate: Date = new Date();
  CalendarView = CalendarView;
  events: CalendarEvent[] = Eventos;

  // 👇 Configuración de horario
  dayStartHour = 8; // 8:00 AM
  dayEndHour = 18; // 6:00 PM
  hourSegments = 1; // Bloques de 1 hora

  constructor(
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    private snackBar: MatSnackBar
  ) {}

  // 🔹 Se ejecuta al hacer clic en un día u hora
  async onDayClick(event: any): Promise<void> {
    const date = event.day ? event.day.date : event.date;

    console.log('👉 Fecha capturada (local):', date);

    // 🔹 Validación: no permitir fechas pasadas
    const ahora = new Date();
    ahora.setSeconds(0, 0);
    date.setSeconds(0, 0);

    if (date < ahora) {
      this.snackBar.open('No puedes crear una cita en el pasado.', 'Cerrar', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['snackbar-error'],
      });
      return;
    }

    // 🔹 Esperar resultado del modal
    const result = await firstValueFrom(
      this.dialog
        .open(ModalCita, {
          width: '400px',
          data: { fecha: date },
        })
        .afterClosed()
    );

    console.log('📤 Resultado del modal:', result);

    if (result) {
      const nuevaCita: CalendarEvent = {
        title: result.titulo,
        start: result.fecha,
        end: new Date(result.fecha.getTime() + 60 * 60 * 1000),
        meta: { description: result.descripcion },
      };

      this.events = [...this.events, nuevaCita];
      this.viewDate = new Date(this.viewDate);
      this.cdr.detectChanges(); // 👈 fuerza actualización
    }
  }

  setView(view: CalendarView) {
    this.view = view;
  }
}
