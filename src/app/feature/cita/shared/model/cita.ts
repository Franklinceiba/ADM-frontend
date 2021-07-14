export class Cita {
    id: number;
    descripcion: string;
    Fecha: any;
    hora: any;
    valor:number;
    idPersona: number;
  
    constructor(
      id: number,
      descripcion: string,
      fecha: any,
      hora: any,
      valor:number,
      idPersona: number
    ) {
      this.id = id;
      this.descripcion = descripcion;
      this.Fecha = fecha;
      this.hora = hora;
      this.valor = valor;
      this.idPersona = idPersona;
    }
  }
  