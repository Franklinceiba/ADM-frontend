import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from '@shared/model/persona';
import { PersonaService } from '@shared/service/persona.service';

@Component({
  selector: 'app-actualizar-persona',
  templateUrl: './actualizar-persona.component.html',
  styleUrls: ['./actualizar-persona.component.css'],
})
export class ActualizarPersonaComponent implements OnInit {
  private MENSAJE_REQUERIDO = 'La cita debe contener la totalidad de los datos';

  persona: Persona;
  fechaActual: any;
  personaForm: FormGroup;
  mostrarMensajeAlerta = false;
  mensajeAlertaCita: string;

  constructor(
    private datePipe: DatePipe,
    private router: Router,
    protected personasServices: PersonaService
  ) {
    const { state } = this.router.getCurrentNavigation().extras;

    if (!state) {
      this.router.navigate(['/persona/lista']);
    }

    this.persona = state.persona;
  }

  get fechaActualString() {
    return this.datePipe.transform(this.fechaActual, 'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.fechaActual = new Date();
    this.construirFormularioPersona();
    this.cargarDatosPersona(this.persona);
  }

  cargarDatosPersona(persona) {
    this.personaForm.patchValue(persona);
  }

  actualizarPersona() {
    this.mostrarMensajeAlerta = false;
    this.mensajeAlertaCita = '';
    if (this.personaForm.invalid) {
      this.mostrarMensajeAlerta = true;
      this.mensajeAlertaCita = this.MENSAJE_REQUERIDO;
      return;
    }
    this.personaForm
      .get('fechaNacimiento')
      .setValue(
        this.datePipe.transform(
          this.personaForm.get('fechaNacimiento').value,
          'yyyy-MM-dd'
        )
      );
    this.personasServices
      .actualizar(this.personaForm.value, this.persona.id)
      .subscribe(
        () => {
          this.router.navigate(['/persona/listar']);
        },
        (error) => {
          this.mostrarMensajeAlerta = true;
          this.mensajeAlertaCita = error.error.mensaje;
        }
      );
  }

  private construirFormularioPersona() {
    this.personaForm = new FormGroup({
      tipoDocumento: new FormControl('', [Validators.required]),
      documento: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      fechaNacimiento: new FormControl('', [Validators.required]),
      celular: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
    });
  }
}
