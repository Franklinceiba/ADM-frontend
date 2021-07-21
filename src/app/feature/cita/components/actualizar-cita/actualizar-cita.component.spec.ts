import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { Persona } from '@shared/model/persona';
import { PersonaService } from '@shared/service/persona.service';
import { of } from 'rxjs';
import { CitaService } from '../../shared/service/cita.service';

import { ActualizarCitaComponent } from './actualizar-cita.component';

describe('ActualizarCitaComponent', () => {
  let fixture: ComponentFixture<ActualizarCitaComponent>;
  let citaService: CitaService;
  let personaService: PersonaService;
  const listaPersonas: Persona[] = [new Persona(1, 'C.C', '23123213', 'felipe', 'corzo', '2021-07-15', '3156378928', 'felipe@gmail.com')];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarCitaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [CitaService, PersonaService, DatePipe, HttpService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarCitaComponent);
    citaService = TestBed.inject(CitaService);
    personaService = TestBed.inject(PersonaService);
    spyOn(citaService, 'guardar').and.returnValue(
      of(true)
    );
    spyOn(personaService, 'consultar').and.returnValue(
      of(listaPersonas)
    );
    fixture.detectChanges();
  });
});
