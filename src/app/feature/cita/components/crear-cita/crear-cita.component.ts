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
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css'],
})
export class CrearCitaComponent implements OnInit {
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
    protected citaService: CitaService,
    protected personaService: PersonaService
  ) {}

  get fechaActualString() {
    return this.datePipe.transform(this.fechaActual, 'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.listaPersonas = this.personaService.consultar();
    this.fechaActual = new Date();
    this.construirFormularioCita();
  }

  registrarCita() {
    this.mostrarMensajeAlerta = false;
    this.mensajeAlertaCita = '';
    if (this.citaForm.invalid) {
      this.mostrarMensajeAlerta = true;
      this.mensajeAlertaCita = this.MENSAJE_REQUERIDO;
      return;
    }
    this.citaService.guardar(this.citaForm.value).subscribe(
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
