import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cita } from '../../shared/model/cita';
import { CitaService } from '../../shared/service/cita.service';

@Component({
  selector: 'app-listar-cita',
  templateUrl: './listar-cita.component.html',
  styleUrls: ['./listar-cita.component.css']
})
export class ListarCitaComponent implements OnInit {
  public listaCitas: Observable<Cita[]>;

  constructor(protected citaService: CitaService, private router:Router) { }

  ngOnInit(): void {
    this.listaCitas = this.citaService.consultar();
  }

  eliminarCita(id: number) {
    this.citaService.eliminar(id).subscribe();
  }

  actualizarCita(){
    this.router.navigate(['/cita/crear']);
  }

}
