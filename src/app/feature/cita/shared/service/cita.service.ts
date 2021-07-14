import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Cita } from '../model/cita';


@Injectable()
export class CitaService {

  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Cita[]>(`${environment.endpoint}/citas`, this.http.optsName('Listar Citas'));
  }

  public consultarId(id: string) {
    return this.http.doGet<Cita[]>(`${environment.endpoint}/citas/${id}`, this.http.optsName('Listar Citas por id'));
  }

  public guardar(cita: Cita) {
    return this.http.doPost<Cita, boolean>(`${environment.endpoint}/citas`, cita,
                                                this.http.optsName('Crear/Actualizar Cita'));
  }

  public eliminar(id: number) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/citas/${id}`,
                                                 this.http.optsName('eliminar citas'));
  }
}