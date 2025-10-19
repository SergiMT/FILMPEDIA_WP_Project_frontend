import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
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

  // Devuelve [{label, value}] para usar con @for
  valoracioEntries(v = this.pelicula?.valoracio) {
    if (!v) return [];
    return [
      { label: 'Lúdic',    value: v.ludic },
      { label: 'Cultural', value: v.cultural },
      { label: 'Educatiu', value: v.educatiu },
      { label: 'Artístic', value: v.artistic },
    ];
  }

  asPercent(val: number) {
    // 1..5 -> 0..100
    const pct = (Number(val) / 5) * 100;
    return `${Math.max(0, Math.min(100, pct))}%`;
  }
}
