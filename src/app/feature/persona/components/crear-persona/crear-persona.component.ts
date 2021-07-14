import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from '@persona/shared/service/persona.service';
import { Persona } from '@persona/shared/model/persona';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {
  persona: Persona;
  fechaActual: any;
  personaForm: FormGroup;

  constructor(private datePipe: DatePipe, protected personasServices: PersonaService) { }

  get fechaActualString(){
    return this.datePipe.transform(this.fechaActual, 'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.fechaActual = new Date();
    this.construirFormularioPersona();
  }

  registrarPersona(){
    this.personaForm.get('fechaNacimiento').setValue(this.datePipe.transform(this.personaForm.get('fechaNacimiento').value, 'yyyy-MM-dd'));
    this.personasServices.guardar(this.personaForm.value).subscribe();
    console.log(this.personaForm.value);
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
