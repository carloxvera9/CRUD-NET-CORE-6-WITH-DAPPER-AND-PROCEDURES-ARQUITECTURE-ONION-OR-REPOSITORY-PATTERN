import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarLibroComponent } from './agregar-editar-libro.component';

describe('AgregarEditarLibroComponent', () => {
  let component: AgregarEditarLibroComponent;
  let fixture: ComponentFixture<AgregarEditarLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarLibroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEditarLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
