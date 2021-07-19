import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from '@shared/service/persona.service';
import { Persona } from '@shared/model/persona';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css'],
})
export class CrearPersonaComponent implements OnInit {
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
  ) { }

  get fechaActualString() {
    return this.datePipe.transform(this.fechaActual, 'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.fechaActual = new Date();
    this.construirFormularioPersona();
  }

  registrarPersona() {
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
    this.personasServices.guardar(this.personaForm.value).subscribe(
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
