import { CalendarEvent } from 'angular-calendar';

export const Eventos: CalendarEvent[] = [
  {
    start: new Date(2025, 9, 25, 10, 0, 0),
    end: new Date(2025, 9, 25, 11, 0, 0),
    title: 'Vacunación - Luna 🐕 (Sábado 25)',
    meta: {
      description: 'Aplicación de refuerzo antirrábico. Propietario: Sra. Gómez.',
    },
  },
  {
    start: new Date(2025, 9, 27, 15, 0, 0),
    end: new Date(2025, 9, 27, 16, 0, 0),
    title: 'Consulta general - Max 🐶 (Lunes 27)',
    meta: {
      description: 'Revisión por pérdida de apetito. Se recomienda análisis general.',
    },
  },
  {
    start: new Date(2025, 9, 28, 9, 0, 0),
    end: new Date(2025, 9, 28, 10, 0, 0),
    title: 'Control postoperatorio - Kira 🐈 (Martes 28)',
    meta: {
      description: 'Seguimiento de cirugía de esterilización. Retiro de puntos.',
    },
  },
  {
    start: new Date(2025, 9, 28, 11, 30, 0),
    end: new Date(2025, 9, 28, 12, 30, 0),
    title: 'Vacunación - Pepe 🐍 (Martes 28)',
    meta: {
      description: 'Primera dosis de vacuna contra parásitos. Revisión de piel.',
    },
  },
];
