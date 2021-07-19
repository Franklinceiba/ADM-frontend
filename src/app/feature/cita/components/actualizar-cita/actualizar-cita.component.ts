import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from '@shared/model/persona';
import { PersonaService } from '@shared/service/persona.service';
import { Observable } from 'rxjs';
import { Cita } from '../../shared/model/cita';
import { CitaService } from '../../shared/service/cita.service';

@Component({
  selector: 'app-actualizar-cita',
  templateUrl: './actualizar-cita.component.html',
  styleUrls: ['./actualizar-cita.component.css'],
})
export class ActualizarCitaComponent implements OnInit {
  private MENSAJE_REQUERIDO = 'La cita debe contener la totalidad de los datos';
  public listaPersonas: Observable<Persona[]>;
  cita: Cita;
  fechaActual: any;
  citaForm: FormGroup;
  mostrarMensajeAlerta = false;
  mensajeAlertaCita: string;
  constructor(
    private datePipe: DatePipe,
    private router: Router,
    protected citaServices: CitaService,
    protected personaService: PersonaService
  ) {
    const { state } = this.router.getCurrentNavigation().extras;

    if (!state) {
      this.router.navigate(['/cita/lista']);
    }

    this.cita = state.cita;
  }
  get fechaActualString() {
    return this.datePipe.transform(this.fechaActual, 'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.listaPersonas = this.personaService.consultar();
    this.fechaActual = new Date();
    this.construirFormularioCita();
    this.cargarDatosCita(this.cita);
  }

  cargarDatosCita(cita) {
    this.citaForm.patchValue(cita);
  }

  actualizarCita() {
    this.mostrarMensajeAlerta = false;
    this.mensajeAlertaCita = '';
    if (this.citaForm.invalid) {
      this.mostrarMensajeAlerta = true;
      this.mensajeAlertaCita = this.MENSAJE_REQUERIDO;
      return;
    }
    this.citaServices.actualizar(this.citaForm.value, this.cita.id).subscribe(
      () => {
        this.router.navigate(['/cita/listar']);
      },
      (error) => {
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
      idPersona: new FormControl('', [Validators.required]),
    });
  }
}
