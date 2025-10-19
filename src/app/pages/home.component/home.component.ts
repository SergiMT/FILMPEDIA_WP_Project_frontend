import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../../components/card/card';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-home.component',
  standalone: true,
  imports: [Card],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private readonly http = inject(HttpClient);
  protected readonly peliculas = signal<Pelicula[]>([]);
  protected readonly items = this.peliculas;

  constructor() {
    this.http.get<Pelicula[]>('data/peliculas.json').subscribe({
      next: (peliculas) => this.peliculas.set(peliculas),
      error: (error) => console.error('No se pudo cargar el listado de peliculas', error),
    });
  }
}
