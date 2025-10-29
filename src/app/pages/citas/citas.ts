import { Component } from '@angular/core';
import { Calendario } from '../../components/calendario/calendario';

@Component({
  selector: 'app-citas',
  imports: [Calendario],
  templateUrl: './citas.html',
  styleUrl: './citas.css',
})
export class Citas {}
