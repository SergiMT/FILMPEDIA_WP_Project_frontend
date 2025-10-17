export interface Pelicula {
  id: number;
  title: string;
  excerpt: string;
  edad: string;
  duracion: string;
  bloque: 'tendencias' | 'maraton' | 'clasicos' | 'recomanacions' | null;
  puntuacion: number;
  poster: string | null;
  tags: string[];
  ambits?: string[];
  valoracio?: {
    ludic: number;
    cultural: number;
    educatiu: number;
    artistic: number;
  };
  link: string;
}
