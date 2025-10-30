import { Component } from '@angular/core';
import { TablaHistorial } from '../../components/tabla-historial/tabla-historial';

@Component({
  selector: 'app-historial',
  imports: [TablaHistorial],
  templateUrl: './historial.html',
  styleUrl: './historial.css',
})
export class Historial {}
