import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { Persona } from '@shared/model/persona';
import { PersonaService } from '@shared/service/persona.service';
import { of } from 'rxjs';
import { ListarPersonaComponent } from './listar-persona.component';

describe('ListarPersonaComponent', () => {
  let component: ListarPersonaComponent;
  let fixture: ComponentFixture<ListarPersonaComponent>;
  let personaService: PersonaService;
  // tslint:disable-next-line: max-line-length
  const listaPersonas: Persona[] = [new Persona(1, 'C.C', '23123213', 'felipe', 'corzo', '2021-07-15', '3156378928', 'felipe@gmail.com'), new Persona(2, 'C.C', '665676756', 'juan', 'gutierrez', '2021-07-14', '3145678998', 'juan@gmail.com')];


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPersonaComponent],
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
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPersonaComponent);
    component = fixture.componentInstance;
    personaService = TestBed.inject(PersonaService);
    spyOn(personaService, 'consultar').and.returnValue(
      of(listaPersonas)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listaPersonas.subscribe(resultado => {
      expect(2).toBe(resultado.length);
    });
  });
});
