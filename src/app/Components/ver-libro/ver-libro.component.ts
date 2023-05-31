import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Libro } from 'src/app/Interfaces/libro';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-ver-libro',
  templateUrl: './ver-libro.component.html',
  styleUrls: ['./ver-libro.component.css'],
})
export class VerLibroComponent implements OnInit {
  id_libro: number;
  libro: Libro[] = [];
  loading: boolean = false;

  // libro$!: Observable<Libro>;

  constructor(
    private _libroServices: LibroService,
    private oRoute: ActivatedRoute
  ) {
    this.id_libro = Number(this.oRoute.snapshot.paramMap.get('id_libro'));
  }

  ngOnInit(): void {
    //this.libro$ = this._libroServices.getLibros(this.id_libro);
    this.obtenerLibro();
  }
  obtenerLibro() {
    this.loading = true;
    this._libroServices.getLibros(this.id_libro).subscribe((data) => {
      console.log(data);
      this.libro = data;
      this.loading = false;
    });
  }
}
