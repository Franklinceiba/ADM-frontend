export class Persona {
  id: number;
  tipoDocumento: string;
  documento: string;
  nombre: string;
  apellido: string;
  fechaNacimiento: any;
  celular: string;
  email: string;

  constructor(
    id: number,
    tipoDocumento: string,
    documento: string,
    nombre: string,
    apellido: string,
    fechaNacimiento: any,
    celular: string,
    email: string
  ) {
    this.id = id;
    this.tipoDocumento = tipoDocumento;
    this.documento = documento;
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.celular = celular;
    this.email = email;
  }
}
