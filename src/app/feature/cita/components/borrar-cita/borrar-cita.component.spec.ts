import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarCitaComponent } from './borrar-cita.component';

describe('BorrarCitaComponent', () => {
  let component: BorrarCitaComponent;
  let fixture: ComponentFixture<BorrarCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarCitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
