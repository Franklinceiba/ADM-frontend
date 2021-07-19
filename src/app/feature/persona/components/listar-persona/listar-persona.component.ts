import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from '@shared/model/persona';
import { PersonaService } from '@shared/service/persona.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-persona',
  templateUrl: './listar-persona.component.html',
  styleUrls: ['./listar-persona.component.css']
})
export class ListarPersonaComponent implements OnInit {
  public listaPersonas: Observable<Persona[]>;
  public persona: Observable<Persona[]>;
  filtroForm: FormGroup;
  validarFiltro = false;
  mostrarMensajeAlerta = false;
  mensajeAlertaEliminarPersona: string;

  constructor(protected personaService: PersonaService, private router: Router) { }

  ngOnInit(): void {
    this.inizializarTabla();
    this.construirFormulariofiltroDocumento();
  }

  eliminarPersona(id: number) {
    this.personaService.eliminar(id).subscribe(
      () => { },
      (error) => {
        this.mostrarMensajeAlerta = true;
        this.mensajeAlertaEliminarPersona = error.error.mensaje;
      }
    );
    if (this.validarFiltro){
      this.filtrarDocumento();
    }else {
      this.inizializarTabla();
    }
  }

  actualizarPersona(persona: Persona){
    this.router.navigate(['/persona/actualizar'], {state : { persona }});
  }

  filtrarDocumento(){
    this.validarFiltro = true;
    this.listaPersonas = this.personaService.consultarDocumento(this.filtroForm.get('documento').value);
  }

  eliminarFiltro(){
    this.validarFiltro = false;
    this.construirFormulariofiltroDocumento();
    this.inizializarTabla();
  }


  inizializarTabla(){
    this.listaPersonas = this.personaService.consultar();
  }

  private construirFormulariofiltroDocumento() {
    this.filtroForm = new FormGroup({
      documento: new FormControl(''),
    });
  }

}
