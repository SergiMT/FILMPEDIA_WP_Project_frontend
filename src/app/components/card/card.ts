import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss'
})
export class Card {
  @Input({ required: true }) pelicula!: Pelicula;
}
