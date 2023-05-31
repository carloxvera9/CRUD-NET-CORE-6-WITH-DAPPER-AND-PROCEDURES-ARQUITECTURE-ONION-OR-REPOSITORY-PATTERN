import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulos/
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarEditarLibroComponent } from './Components/agregar-editar-libro/agregar-editar-libro.component';
import { ListadoLibroComponent } from './Components/listado-libro/listado-libro.component';
import { VerLibroComponent } from './Components/ver-libro/ver-libro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular material

@NgModule({
  declarations: [
    AppComponent,
    AgregarEditarLibroComponent,
    ListadoLibroComponent,
    VerLibroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
