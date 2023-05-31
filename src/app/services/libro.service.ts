import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Libro } from '../Interfaces/libro';

@Injectable({
  providedIn: 'root',
})
export class LibroService {
  private myAppUrl: string = environment.endPoint;
  private myApiurl: string = 'api/Libro/';
  // private myApiDelete: string = 'api/Libro/elimina/';
  constructor(private http: HttpClient) {}

  //Listado ALL
  getLibro(): Observable<Libro[]> {
    return this.http.get<Libro[]>(`${this.myAppUrl}${this.myApiurl}lista`);
  }

  //LISTADO BY ID

  getLibros(id_libro: number): Observable<Libro[]> {
    return this.http.get<Libro[]>(
      `${this.myAppUrl}${this.myApiurl}${id_libro}`
    );
  }

  deleteLibro(id_libro: number): Observable<void> {
    return this.http.delete<void>(
      `${this.myAppUrl}${this.myApiurl}${id_libro}`
    );
  }

  registrarLibro(libro: Libro) {
    return this.http.post<Libro>(
      `${this.myAppUrl}${this.myApiurl}inserta`,
      libro
    );
  }

  actualizaLibro(id_libro: number, libro: Libro): Observable<void> {
    return this.http.put<void>(
      `${this.myAppUrl}${this.myApiurl}${id_libro}`,
      libro
    );
  }
}
