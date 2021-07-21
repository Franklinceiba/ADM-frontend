import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Cita } from '@cita/shared/model/cita';
import { HttpService } from '@core/services/http.service';
import { of } from 'rxjs';
import { CitaService } from '../../shared/service/cita.service';

import { ListarCitaComponent } from './listar-cita.component';

describe('ListarCitaComponent', () => {
  let component: ListarCitaComponent;
  let fixture: ComponentFixture<ListarCitaComponent>;
  let citaService: CitaService;
  const listaCitas: Cita[] = [new Cita(1, 'dolor de estomago', '2021-07-07', '08:30', 30000, 1), new Cita(2, 'covid-19', '2021-07-07', '10:30', 30000, 1)];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCitaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [CitaService, HttpService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCitaComponent);
    component = fixture.componentInstance;
    citaService = TestBed.inject(CitaService);
    spyOn(citaService, 'consultar').and.returnValue(
      of(listaCitas)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listaCitas.subscribe(resultado => {
      expect(2).toBe(resultado.length);
    });
  });
});
