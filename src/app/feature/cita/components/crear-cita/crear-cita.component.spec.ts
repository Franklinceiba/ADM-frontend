import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { Persona } from '@shared/model/persona';
import { PersonaService } from '@shared/service/persona.service';
import { of } from 'rxjs';
import { CitaService } from '../../shared/service/cita.service';

import { CrearCitaComponent } from './crear-cita.component';

describe('CrearCitaComponent', () => {
  let component: CrearCitaComponent;
  let fixture: ComponentFixture<CrearCitaComponent>;
  let citaService: CitaService;
  let personaService: PersonaService;
  const listaPersonas: Persona[] = [new Persona(1, 'C.C', '23123213', 'felipe', 'corzo', '2021-07-15', '3156378928', 'felipe@gmail.com')];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCitaComponent ],
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
    fixture = TestBed.createComponent(CrearCitaComponent);
    component = fixture.componentInstance;
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.citaForm.valid).toBeFalsy();
  });

  it('Registrando cita', () => {
    expect(component.citaForm.valid).toBeFalsy();
    component.citaForm.controls.descripcion.setValue('problemas con un accidente');
    component.citaForm.controls.fecha.setValue('2021-07-21');
    component.citaForm.controls.hora.setValue('08:00:00');
    component.citaForm.controls.idPersona.setValue(1);
    expect(component.citaForm.valid).toBeTruthy();

    component.registrarCita();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });

});
