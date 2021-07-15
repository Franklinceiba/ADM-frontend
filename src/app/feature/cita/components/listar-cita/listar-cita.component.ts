import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  filtroForm: FormGroup;
  validarFiltro: boolean = false;

  constructor(protected citaService: CitaService, private router:Router) { }

  ngOnInit(): void {
    this.inizializarTabla();
    this.construirFormulariofiltroFecha();
  }

  eliminarCita(id: number) {
    this.citaService.eliminar(id).subscribe();
    if (this.validarFiltro){
      this.filtrarFecha();
    }else {
      this.inizializarTabla();
    }

  }

  actualizarCita(cita: Cita){
    this.router.navigate(['/cita/actualizar'], {state : { cita: cita }});
  }

  filtrarFecha(){
    console.log(this.filtroForm.get('fecha').value);
    console.log('entro');
    this.validarFiltro = true;
    this.listaCitas = this.citaService.consultarFecha(this.filtroForm.get('fecha').value);
  }

  eliminarFiltro(){
    this.validarFiltro = false;
    this.construirFormulariofiltroFecha();
    this.inizializarTabla();
  }

  inizializarTabla(){
    this.listaCitas = this.citaService.consultar();
  }

  private construirFormulariofiltroFecha() {
    this.filtroForm = new FormGroup({
      fecha: new FormControl(''),
    });
  }

}
