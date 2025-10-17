export interface Pelicula {
  id: number;
  title: string;
  excerpt: string;
  edad: string;
  duracion: string;
  bloque: 'tendencias'|'maraton'|'clasicos'|null;
  puntuacion: number;
  poster: string|null;
  tags: string[];
  link: string;
}
