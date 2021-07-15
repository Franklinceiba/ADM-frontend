import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cita } from '../../shared/model/cita';
import { CitaService } from '../../shared/service/cita.service';

@Component({
  selector: 'app-actualizar-cita',
  templateUrl: './actualizar-cita.component.html',
  styleUrls: ['./actualizar-cita.component.css']
})
export class ActualizarCitaComponent implements OnInit {
  cita: Cita;
  fechaActual: any;
  citaForm: FormGroup;
  mostrarMensajeAlerta: boolean = false;
  mensajeAlertaCita: string;
  constructor(private datePipe: DatePipe, private router: Router, protected citaServices: CitaService) { 
    const { state } = this.router.getCurrentNavigation().extras;

    if (!state) {
      this.router.navigate(['/cita/lista']);
    }

    this.cita = state.cita;
  }
  get fechaActualString(){
    return this.datePipe.transform(this.fechaActual, 'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.fechaActual = new Date();
    this.construirFormularioCita();
    this.cargarDatosCita(this.cita);
  }

  cargarDatosCita(cita){
    this.citaForm.patchValue(cita);
  }

  actualizarCita(){
    this.mostrarMensajeAlerta = false;
    this.mensajeAlertaCita = '';
    if (this.citaForm.invalid){
      console.log('faltan datos');
      this.mostrarMensajeAlerta = true;
      this.mensajeAlertaCita = 'La cita debe contener la totalidad de los datos';
      return;
    }
    this.citaServices.actualizar(this.citaForm.value, this.cita.id).subscribe(json => {
      console.log(json);
      this.router.navigate(['/cita/listar']);
    }, error =>{
      console.log(error.error.mensaje);
      this.mostrarMensajeAlerta = true;
      this.mensajeAlertaCita = error.error.mensaje;
    }
    );
  }

  private construirFormularioCita() {
    this.citaForm = new FormGroup({
      descripcion: new FormControl('', [Validators.required]),
      fecha: new FormControl('', [Validators.required]),
      hora: new FormControl('', [Validators.required]),
      idPersona: new FormControl('', [Validators.required])
    });
  }

}
