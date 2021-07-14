import { NgModule } from '@angular/core';

import { CitaRoutingModule } from './cita-routing.module';
import { BorrarCitaComponent } from './components/borrar-cita/borrar-cita.component';
import { ListarCitaComponent } from './components/listar-cita/listar-cita.component';
import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';
import { CitaComponent } from './components/cita/cita.component';
import { SharedModule } from '@shared/shared.module';
import { CitaService } from './shared/service/cita.service';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    CrearCitaComponent,
    ListarCitaComponent,
    BorrarCitaComponent,
    CitaComponent
  ],
  imports: [
    CitaRoutingModule,
    SharedModule
  ],
  providers: [CitaService, DatePipe]
})
export class CitaModule { }