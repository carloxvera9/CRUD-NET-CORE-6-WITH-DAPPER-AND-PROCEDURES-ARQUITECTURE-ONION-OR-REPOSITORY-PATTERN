import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoLibroComponent } from './listado-libro.component';

describe('ListadoLibroComponent', () => {
  let component: ListadoLibroComponent;
  let fixture: ComponentFixture<ListadoLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoLibroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
