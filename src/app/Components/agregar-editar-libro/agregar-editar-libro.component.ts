import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Libro } from 'src/app/Interfaces/libro';
import { LibroService } from 'src/app/services/libro.service';

@Component({
  selector: 'app-agregar-editar-libro',
  templateUrl: './agregar-editar-libro.component.html',
  styleUrls: ['./agregar-editar-libro.component.css'],
})
export class AgregarEditarLibroComponent implements OnInit {
  loading: boolean = false;
  form: FormGroup;
  id: number;
  operacion: string = 'Agregar';

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private _libroService: LibroService,
    private router: Router,
    private oRouter: ActivatedRoute
  ) {
    this.form = this.fb.group({
      nom_libro: ['', Validators.required],
      autor_libro: ['', Validators.required],
      categoria: ['', Validators.required],
      fecha_lanzamiento: ['', Validators.required],
    });
    this.id = Number(this.oRouter.snapshot.paramMap.get('id'));
    console.log(this.id);
  }

  openSnackBar(message: string, action: string) {}

  ngOnInit(): void {
    if (this.id != 0) {
      this.operacion = 'Editar';
      this.obtenerLibros(this.id);
      this.id;
    }
  }

  //Obtiene libros
  obtenerLibros(id: number) {
    this.loading = true;
    this._libroService.getLibros(id).subscribe((data) => {
      console.log(data);
      this.form.setValue({
        nom_libro: data[0].nom_libro,
        autor_libro: data[0].autor_libro,
        categoria: data[0].categoria,
        fecha_lanzamiento: data[0].fecha_lanzamiento,
      });
      this.loading = false;
    });
  }

  agregarEditarLibro() {
    // const libro = this.form.value.libro;

    //Construyo mi objeto
    const libro: Libro = {
      nom_libro: this.form.value.nom_libro,
      autor_libro: this.form.value.autor_libro,
      categoria: this.form.value.categoria,
      fecha_lanzamiento: this.form.value.fecha_lanzamiento,
      estado: 1,
    };

    // si el id ID es diferente de 0 Editamos // else agregamos
    if (this.id != 0) {
      //global
      libro.id_libro = this.id;
      this.id, libro;
      this.editarLibro(this.id, libro);
    } else {
      this.agregarLibro(libro);
    }
  }

  editarLibro(id: number, libro: Libro) {
    this.loading = true;
    this._libroService.actualizaLibro(id, libro).subscribe(() => {});

    this.mensajeExito('Actualizado');
    this.router.navigate(['/lista']);
    this.loading = false;
  }

  agregarLibro(libro: Libro) {
    //Enviamos al backend
    this._libroService.registrarLibro(libro).subscribe((data) => {
      console.log(data);
      this.mensajeExito('Registrado');
      this.router.navigate(['/lista']);
    });
  }

  mensajeExito(texto: string) {
    this._snackBar.open(`El libro fue ${texto} con exito`, '', {
      duration: 4000,
      horizontalPosition: 'right',
    });
  }
}
