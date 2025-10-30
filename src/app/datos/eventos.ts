import { CalendarEvent } from 'angular-calendar';

export const Eventos: CalendarEvent[] = [
  {
    start: new Date(2025, 9, 25, 10, 0, 0),
    end: new Date(2025, 9, 25, 11, 0, 0),
    title: 'Vacunación',
    meta: {
      description: 'Aplicación de refuerzo antirrábico.',
      clienteId: 1,
      mascotaId: 1,
    },
  },
  {
    start: new Date(2025, 9, 27, 15, 0, 0),
    end: new Date(2025, 9, 27, 16, 0, 0),
    title: 'Consulta general',
    meta: {
      description: 'Revisión por pérdida de apetito. Se recomienda análisis general.',
      clienteId: 1,
      mascotaId: 2,
    },
  },
  {
    start: new Date(2025, 9, 28, 9, 0, 0),
    end: new Date(2025, 9, 28, 10, 0, 0),
    title: 'Control postoperatorio',
    meta: {
      description: 'Seguimiento de cirugía de esterilización. Retiro de puntos.',
      clienteId: 2,
      mascotaId: 3,
    },
  },
  {
    start: new Date(2025, 9, 28, 11, 30, 0),
    end: new Date(2025, 9, 28, 12, 30, 0),
    title: 'Vacunación',
    meta: {
      description: 'Primera dosis de vacuna contra parásitos. Revisión de piel.',
      clienteId: 3,
      mascotaId: 4,
    },
  },
];
