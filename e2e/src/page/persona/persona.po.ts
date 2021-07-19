import { by, element } from 'protractor';

export class PersonaPage {
    private linkCrearPersona = element(by.id('linkCrearPersona'));
    private linkListarPersonas = element(by.id('linkListarPersona'));
    private inputTipoDocumentoPersona = element(by.id('tipoDocumento'));
    private inputDocumentoPersona = element(by.id('documento'));
    private inputNombrePersona = element(by.id('nombre'));
    private inputApellidoPersona = element(by.id('apellido'));
    private inputFechaNacimientoPersona = element(by.id('fechaNacimiento'));
    private inputCelularPersona = element(by.id('celular'));
    private inputEmailPersona = element(by.id('email'));
    private buttonRegistrarPersona = element(
        by.xpath('//*[@id="buttonRegistrarPersona"]')
    );
    private buttonActualizarFormPersona = element(
        by.xpath('//*[@id="buttonActualizarPersona"]')
    );
    private listaPersonas = element.all(
        by.xpath(
            '/html/body/app-root/app-persona/app-listar-persona/table/tbody/tr'
        )
    );
    // tslint:disable-next-line: max-line-length
    private buttonEliminarPersona = element(
        by.xpath(
            '/html/body/app-root/app-persona/app-listar-persona/table/tbody/tr[1]/td[8]/button[2]'
        )
    );
    private buttonActualizarPersona = element(
        by.xpath(
            '/html/body/app-root/app-persona/app-listar-persona/table/tbody/tr[1]/td[8]/button[1]'
        )
    );
    private campoNombrePersona = element(
        by.xpath(
            '/html/body/app-root/app-persona/app-listar-persona/table/tbody/tr[1]/td[3]'
        )
    );

    async clickBotonCrearPersonas() {
        await this.linkCrearPersona.click();
    }

    async clickBotonListarPersonas() {
        await this.linkListarPersonas.click();
    }

    async ingresarTipoDocumento(tipoDocumentoPersona) {
        await this.inputTipoDocumentoPersona.sendKeys(tipoDocumentoPersona);
    }

    async ingresarDocumento(documentoPersona) {
        await this.inputDocumentoPersona.sendKeys(documentoPersona);
    }

    async ingresarNombre(nombrePersona) {
        await this.inputNombrePersona.sendKeys(nombrePersona);
    }
    async limpiarNombre() {
        await this.inputNombrePersona.clear();
    }

    async ingresarApellido(apellidoPersona) {
        await this.inputApellidoPersona.sendKeys(apellidoPersona);
    }

    async ingresarFechaNacimiento(fechaNacimientoPersona) {
        await this.inputFechaNacimientoPersona.sendKeys(fechaNacimientoPersona);
    }

    async ingresarCelular(celularPersona) {
        await this.inputCelularPersona.sendKeys(celularPersona);
    }

    async ingresarEmail(emailPersona) {
        await this.inputEmailPersona.sendKeys(emailPersona);
    }

    async clickBotonRegistrarPersona() {
        await this.buttonRegistrarPersona.click();
    }

    async contarPersonas() {
        return this.listaPersonas.count();
    }

    async clickBotonEliminarPersona() {
        await this.buttonEliminarPersona.click();
    }

    async clickBotonActualizarPersona() {
        await this.buttonActualizarPersona.click();
    }

    async getNombrePersonas() {
        return this.campoNombrePersona.getText();
    }

    async clickBotonActualizarFormPersona() {
        await this.buttonActualizarFormPersona.click();
    }
}
