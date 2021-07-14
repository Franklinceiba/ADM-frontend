import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '@persona/shared/model/persona';
import { PersonaService } from '@persona/shared/service/persona.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-persona',
  templateUrl: './listar-persona.component.html',
  styleUrls: ['./listar-persona.component.css']
})
export class ListarPersonaComponent implements OnInit {
  public listaPersonas: Observable<Persona[]>;

  constructor(protected personaService: PersonaService, private router:Router) { }

  ngOnInit(): void {
    this.listaPersonas = this.personaService.consultar();
  }

  eliminarPersona(id: number) {
    this.personaService.eliminar(id).subscribe();
  }

  actualizarPersona(){
    this.router.navigate(['/persona/crear']);
  }

}
