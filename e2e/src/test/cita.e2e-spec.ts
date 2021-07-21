
import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { CitaPage } from '../page/cita/cita.po';

describe('workspace-project Cita', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let cita: CitaPage;
    let CANTIDAD_VARIABLES_ANTES: number;
    let CANTIDAD_VARIABLES_DESPUES: number;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        cita = new CitaPage();
        CANTIDAD_VARIABLES_ANTES = 2;
        CANTIDAD_VARIABLES_DESPUES = 3;
    });

    it('Deberia crear cita', async () => {
        const DESCRIPCION_CITA = 'dolor de cabeza';
        const FECHA_CITA = '07-08-2021';
        const HORA_CITA = '11:30:00';
        const ID_PERSONA_CITA = 37;

        page.navigateTo();
        navBar.clickBotonCitas();
        cita.clickBotonListarCitas();
        expect(CANTIDAD_VARIABLES_ANTES).toBe(cita.contarCitas());
        cita.clickBotonCrearCitas();
        cita.ingresarDescripcion(DESCRIPCION_CITA);
        cita.ingresarFecha(FECHA_CITA);
        cita.ingresarHora(HORA_CITA);
        cita.ingresarIdPersona(ID_PERSONA_CITA);
        cita.clickBotonRegistrarCita();

        cita.clickBotonListarCitas();
        expect(CANTIDAD_VARIABLES_DESPUES).toBe(cita.contarCitas());

        // Adicionamos las validaciones despues de la creación
        // expect(<>).toEqual(<>);
    });

    it('Deberia listar citas', () => {
        page.navigateTo();
        navBar.clickBotonCitas();
        cita.clickBotonListarCitas();

        expect(CANTIDAD_VARIABLES_DESPUES).toBe(cita.contarCitas());
    });

    it('Deberia eliminar citas', () => {
        page.navigateTo();
        navBar.clickBotonCitas();
        cita.clickBotonListarCitas();
        expect(CANTIDAD_VARIABLES_DESPUES).toBe(cita.contarCitas());

        cita.clickBotonListarCitas();
        cita.clickBotonEliminarCita();

        navBar.clickBotonCitas();
        cita.clickBotonListarCitas();
        expect(CANTIDAD_VARIABLES_ANTES).toBe(cita.contarCitas());
    });

    it('Deberia actualizar citas', () => {
        const DESCRIPCION_CITA = 'por razones de prubas del corazon';

        page.navigateTo();
        navBar.clickBotonCitas();
        cita.clickBotonListarCitas();
        expect(CANTIDAD_VARIABLES_ANTES).toBe(cita.contarCitas());

        cita.clickBotonListarCitas();
        cita.clickBotonActualizarCita();

        cita.limpiarDescripcion();
        cita.ingresarDescripcion(DESCRIPCION_CITA);
        cita.clickBotonActualizarFormCita();

        navBar.clickBotonCitas();
        cita.clickBotonListarCitas();
        expect(cita.getDescripcionCitas()).toEqual(DESCRIPCION_CITA);
        expect(CANTIDAD_VARIABLES_ANTES).toBe(cita.contarCitas());
    });
});
