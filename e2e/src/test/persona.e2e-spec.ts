
import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { PersonaPage } from '../page/persona/persona.po';

describe('workspace-project Persona', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let persona: PersonaPage;
    let CANTIDAD_VARIABLES_ANTES: number;
    let CANTIDAD_VARIABLES_DESPUES: number;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        persona = new PersonaPage();
        CANTIDAD_VARIABLES_ANTES = 10;
        CANTIDAD_VARIABLES_DESPUES = 11;
    });

    it('Deberia crear persona', async () => {
        const TIPO_DOCUMENTO_PERSONA = 'C.C';
        const DOCUMENTO_PERSONA = '38';
        const NOMBRE_PERSONA = 'luis';
        const APELLIDO_PERSONA = 'pineda';
        const FECHA_NACIMIENTO_PERSONA = '07-07-2021';
        const CELULAR_PERSONA = '3135678567';
        const EMAIL_PERSONA = 'luis@gmail.com';

        page.navigateTo();
        navBar.clickBotonPersonas();
        persona.clickBotonListarPersonas();
        expect(CANTIDAD_VARIABLES_ANTES).toBe(persona.contarPersonas());
        persona.clickBotonCrearPersonas();
        persona.ingresarTipoDocumento(TIPO_DOCUMENTO_PERSONA);
        persona.ingresarDocumento(DOCUMENTO_PERSONA);
        persona.ingresarNombre(NOMBRE_PERSONA);
        persona.ingresarApellido(APELLIDO_PERSONA);
        persona.ingresarFechaNacimiento(FECHA_NACIMIENTO_PERSONA);
        persona.ingresarCelular(CELULAR_PERSONA);
        persona.ingresarEmail(EMAIL_PERSONA);
        persona.clickBotonRegistrarPersona();

        persona.clickBotonListarPersonas();
        expect(CANTIDAD_VARIABLES_DESPUES).toBe(persona.contarPersonas());

        // Adicionamos las validaciones despues de la creación
        // expect(<>).toEqual(<>);
    });

    it('Deberia listar personas', () => {
        page.navigateTo();
        navBar.clickBotonPersonas();
        persona.clickBotonListarPersonas();

        expect(CANTIDAD_VARIABLES_DESPUES).toBe(persona.contarPersonas());
    });

    it('Deberia eliminar personas', () => {
        page.navigateTo();
        navBar.clickBotonPersonas();
        persona.clickBotonListarPersonas();
        expect(CANTIDAD_VARIABLES_DESPUES).toBe(persona.contarPersonas());

        persona.clickBotonListarPersonas();
        persona.clickBotonEliminarPersona();

        navBar.clickBotonPersonas();
        persona.clickBotonListarPersonas();
        expect(CANTIDAD_VARIABLES_ANTES).toBe(persona.contarPersonas());
    });

    it('Deberia actualizar personas', () => {
        const NOMBRE_PERSONA = 'franklin';

        page.navigateTo();
        navBar.clickBotonPersonas();
        persona.clickBotonListarPersonas();
        expect(CANTIDAD_VARIABLES_ANTES).toBe(persona.contarPersonas());

        persona.clickBotonListarPersonas();
        persona.clickBotonActualizarPersona();

        persona.limpiarNombre();
        persona.ingresarNombre(NOMBRE_PERSONA);
        persona.clickBotonActualizarFormPersona();

        navBar.clickBotonPersonas();
        persona.clickBotonListarPersonas();
        expect(persona.getNombrePersonas()).toEqual(NOMBRE_PERSONA);
        expect(CANTIDAD_VARIABLES_ANTES).toBe(persona.contarPersonas());
    });
});
