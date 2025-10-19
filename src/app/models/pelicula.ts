export interface Valoracio {
  ludic: number; // 1..5
  cultural: number;
  educatiu: number;
  artistic: number;
}
export interface Pelicula {
  id: number;
  title: string;
  excerpt: string;
  edad: string;
  duracion: string;
  bloque: string;
  puntuacion: number; // 0..100 (si lo usas)
  poster: string;
  tags: string[];
  ambits: string[];
  valoracio: Valoracio;
  link: string;
}
