import { NgModule } from '@angular/core';

import { PersonaRoutingModule } from './persona-routing.module';
import { BorrarPersonaComponent } from './components/borrar-persona/borrar-persona.component';
import { ListarPersonaComponent } from './components/listar-persona/listar-persona.component';
import { CrearPersonaComponent } from './components/crear-persona/crear-persona.component';
import { PersonaComponent } from './components/persona/persona.component';
import { SharedModule } from '@shared/shared.module';
import { PersonaService } from './shared/service/persona.service';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    CrearPersonaComponent,
    ListarPersonaComponent,
    BorrarPersonaComponent,
    PersonaComponent
  ],
  imports: [
    PersonaRoutingModule,
    SharedModule
  ],
  providers: [PersonaService, DatePipe]
})
export class PersonaModule { }
