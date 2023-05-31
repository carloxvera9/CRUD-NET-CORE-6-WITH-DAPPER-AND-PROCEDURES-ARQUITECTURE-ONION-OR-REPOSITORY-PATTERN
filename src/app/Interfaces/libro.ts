export interface Libro {
  id_libro?: number;
  nom_libro: string;
  autor_libro: string;
  categoria: string;
  fecha_lanzamiento: string;
  estado?: number;
}
