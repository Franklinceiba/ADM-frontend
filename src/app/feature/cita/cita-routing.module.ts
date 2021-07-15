import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';
import { ListarCitaComponent } from './components/listar-cita/listar-cita.component';
import { CitaComponent } from './components/cita/cita.component';
import { ActualizarCitaComponent } from './components/actualizar-cita/actualizar-cita.component';


const routes: Routes = [
  {
    path: '',
    component: CitaComponent,
    children: [
      {
        path: 'crear',
        component: CrearCitaComponent
      },
      {
        path: 'actualizar',
        component: ActualizarCitaComponent
      },
      {
        path: 'listar',
        component: ListarCitaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitaRoutingModule { }
