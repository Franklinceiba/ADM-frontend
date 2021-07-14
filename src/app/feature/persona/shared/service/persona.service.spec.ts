import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PersonaService } from './persona.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Persona } from '../model/persona';
import { HttpResponse } from '@angular/common/http';

describe('PersonaService', () => {
  let httpMock: HttpTestingController;
  let service: PersonaService;
  const apiEndpointPersonaConsulta = `${environment.endpoint}/tiposFamilia`;
  const apiEndpointPersonas = `${environment.endpoint}/personas`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PersonaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(PersonaService);
  });

  it('should be created', () => {
    const productService: PersonaService = TestBed.inject(PersonaService);
    expect(productService).toBeTruthy();
  });

  it('deberia listar personas', () => {
    const dummyPersonas = [
      new Persona(1, 'cc', '1234567890', 'franklin', 'vasquez', '2021-07-07', '3166045344', 'franklin@gmail.com'), new Persona(2, 'cc', '0987654321', 'jose', 'villar', '2021-07-05', '31234535453', 'jose@gmail.com')
    ];
    service.consultar().subscribe(personas => {
      expect(personas.length).toBe(2);
      expect(personas).toEqual(dummyPersonas);
    });
    const req = httpMock.expectOne(apiEndpointPersonaConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyPersonas);
  });

  it('deberia crear un persona', () => {
    const dummyPersona = new Persona(1, 'cc', '1234567890', 'franklin', 'vasquez', '2021-07-07', '3166045344', 'franklin@gmail.com');
    service.guardar(dummyPersona).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointPersonas);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia eliminar un persona', () => {
    const dummyPersona = new Persona(1, 'cc', '1234567890', 'franklin', 'vasquez', '2021-07-07', '3166045344', 'franklin@gmail.com');
    service.eliminar(dummyPersona.id).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointPersonas}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
