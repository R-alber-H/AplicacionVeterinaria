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
import { SweetAlertService } from '../../sweetalert/sweetalert-servicio';

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
  // Semana actual
  view: CalendarView = CalendarView.Week;
  viewDate: Date = new Date();
  CalendarView = CalendarView;
  events: CalendarEvent[] = Eventos;

  //  Configuración de horario
  dayStartHour = 8;
  dayEndHour = 18;
  hourSegments = 1;

  constructor(
    private dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    private snackBar: MatSnackBar
  ) { }

  async onDayClick(event: any): Promise<void> {
    const date = event.day ? event.day.date : event.date;

    const ahora = new Date();
    ahora.setSeconds(0, 0);
    date.setSeconds(0, 0);

    if (date < ahora) {
      SweetAlertService.error("No se puede crear citas en horarios pasados");
      return;
    }

    const result = await firstValueFrom(
      this.dialog.open(ModalCita, {
        width: '500px',
        data: { fecha: date },
      }).afterClosed()
    );

    //refrescamos la vista
    this.events = [...Eventos];  
    this.viewDate = new Date(this.viewDate); 
    this.cdr.detectChanges(); 
  }


  setView(view: CalendarView) {
    this.view = view;
  }
}
