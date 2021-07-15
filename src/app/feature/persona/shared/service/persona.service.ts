import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Persona } from '../model/persona';


@Injectable()
export class PersonaService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Persona[]>(`${environment.endpoint}/personas`, this.http.optsName('Listar Personas'));
  }

  public consultarId(id: string) {
    return this.http.doGet<Persona[]>(`${environment.endpoint}/personas/id/${id}`, this.http.optsName('Listar Personas por id'));
  }

  public consultarDocumento(documento: string) {
    return this.http.doGet<Persona[]>(`${environment.endpoint}/personas/documento/${documento}`, this.http.optsName('Listar Personas por documento'));
  }

  public guardar(persona: Persona) {
    return this.http.doPost<Persona, boolean>(`${environment.endpoint}/personas`, persona,
                                                this.http.optsName('Crear Persona'));
  }

  public actualizar(persona: Persona,id: number) {
    return this.http.doPut<Persona, boolean>(`${environment.endpoint}/personas/${id}`, persona,
                                                this.http.optsName('Actualizar Persona'));
  }

  public eliminar(id: number) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/personas/${id}`,
                                                 this.http.optsName('eliminar personas'));
  }
}