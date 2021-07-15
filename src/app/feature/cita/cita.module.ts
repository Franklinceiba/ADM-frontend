import { NgModule } from '@angular/core';

import { CitaRoutingModule } from './cita-routing.module';
import { ListarCitaComponent } from './components/listar-cita/listar-cita.component';
import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';
import { CitaComponent } from './components/cita/cita.component';
import { SharedModule } from '@shared/shared.module';
import { CitaService } from './shared/service/cita.service';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActualizarCitaComponent } from './components/actualizar-cita/actualizar-cita.component';


@NgModule({
  declarations: [
    CrearCitaComponent,
    ListarCitaComponent,
    CitaComponent,
    ActualizarCitaComponent
  ],
  imports: [
    CitaRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [CitaService, DatePipe]
})
export class CitaModule { }