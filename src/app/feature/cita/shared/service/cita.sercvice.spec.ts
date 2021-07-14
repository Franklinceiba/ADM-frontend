import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CitaService } from './cita.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Cita } from '../model/cita';
import { HttpResponse } from '@angular/common/http';

describe('CitaService', () => {
  let httpMock: HttpTestingController;
  let service: CitaService;
  const apiEndpointCitaConsulta = `${environment.endpoint}/tiposFamilia`;
  const apiEndpointCitas = `${environment.endpoint}/citas`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CitaService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(CitaService);
  });

  it('should be created', () => {
    const productService: CitaService = TestBed.inject(CitaService);
    expect(productService).toBeTruthy();
  });

  it('deberia listar citas', () => {
    const dummyCitas = [
      new Cita(1, 'dolor de estomago', '2021-07-07', '08:30', 30000, 1), new Cita(2, 'covid-19', '2021-07-07', '10:30', 30000, 1)
    ];
    service.consultar().subscribe(citas => {
      expect(citas.length).toBe(2);
      expect(citas).toEqual(dummyCitas);
    });
    const req = httpMock.expectOne(apiEndpointCitaConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCitas);
  });

  it('deberia crear un cita', () => {
    const dummyCita = new Cita(1, 'dolor de estomago', '2021-07-07', '08:30', 30000, 1);
    service.guardar(dummyCita).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointCitas);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({body: true}));
  });

  it('deberia eliminar un cita', () => {
    const dummyCita = new Cita(1, 'cc', '1234567890', 'franklin', 'vasquez', '2021-07-07', '3166045344', 'franklin@gmail.com');
    service.eliminar(dummyCita.id).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointCitas}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({body: true}));
  });
});
