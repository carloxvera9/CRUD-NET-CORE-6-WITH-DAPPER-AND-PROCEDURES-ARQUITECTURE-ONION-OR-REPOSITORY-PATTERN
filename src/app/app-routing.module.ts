import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoLibroComponent } from './Components/listado-libro/listado-libro.component';
import { AgregarEditarLibroComponent } from './Components/agregar-editar-libro/agregar-editar-libro.component';
import { VerLibroComponent } from './Components/ver-libro/ver-libro.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lista',
    pathMatch: 'full',
  },
  {
    path: 'ver/:id_libro',
    component: VerLibroComponent,
  },
  {
    path: 'lista',
    component: ListadoLibroComponent,
  },
  {
    path: 'inserta',
    component: AgregarEditarLibroComponent,
  },

  {
    path: 'edit/:id',
    component: AgregarEditarLibroComponent,
  },
  {
    path: '**',
    redirectTo: 'lista',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
