import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { PersonaService } from '@shared/service/persona.service';
import { of } from 'rxjs';

import { CrearPersonaComponent } from './crear-persona.component';

describe('CrearPersonaComponent', () => {
  let component: CrearPersonaComponent;
  let fixture: ComponentFixture<CrearPersonaComponent>;
  let personaService: PersonaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPersonaComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [PersonaService, DatePipe, HttpService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPersonaComponent);
    component = fixture.componentInstance;
    personaService = TestBed.inject(PersonaService);
    spyOn(personaService, 'guardar').and.returnValue(
      of(true)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.personaForm.valid).toBeFalsy();
  });

  it('Registrando cita', () => {
    expect(component.personaForm.valid).toBeFalsy();
    component.personaForm.controls.tipoDocumento.setValue('C.C');
    component.personaForm.controls.documento.setValue('7687867678');
    component.personaForm.controls.nombre.setValue('pedro');
    component.personaForm.controls.apellido.setValue('villamizar');
    component.personaForm.controls.fechaNacimiento.setValue('2021-09-09');
    component.personaForm.controls.celular.setValue('3187098547');
    component.personaForm.controls.email.setValue('pedro@gmail.com');
    expect(component.personaForm.valid).toBeTruthy();

    component.registrarPersona();

    // Aca validamos el resultado esperado al enviar la petición
    // TODO adicionar expect
  });
});
