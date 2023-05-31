import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Libro } from 'src/app/Interfaces/libro';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-listado-libro',
  templateUrl: './listado-libro.component.html',
  styleUrls: ['./listado-libro.component.css'],
})
export class ListadoLibroComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'id_libro',
    'nom_libro',
    'autor_libro',
    'categoria',
    'fecha_lanzamiento',
    'estado',
    'acciones',
  ];

  dataSource = new MatTableDataSource<Libro>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  loading: boolean = false;

  constructor(
    private _snackBar: MatSnackBar,
    private _librosService: LibroService
  ) {}

  ngOnInit(): void {
    this.obtenerLibros();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  obtenerLibros() {
    this.loading = true;
    this._librosService.getLibro().subscribe((data) => {
      console.log(data);
      this.loading = false;
      this.dataSource.data = data;
    });
  }

  openSnackBar(message: string, action: string) {}

  eliminarLibro(id_libro: number) {
    this.loading = true;

    this._librosService.deleteLibro(id_libro).subscribe(() => {
      this.mensajeExito();
      this.loading = false;
      this.obtenerLibros();
    });

    setTimeout(() => {}, 3000);
  }

  mensajeExito() {
    this._snackBar.open('Eliminacion Exitosa', '', {
      duration: 4000,
      horizontalPosition: 'right',
    });
  }
}
