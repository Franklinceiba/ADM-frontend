import { by, element } from 'protractor';

export class CitaPage {
    private linkCrearCita = element(by.id('linkCrearCita'));
    private linkListarCitas = element(by.id('linkListarCita'));
    private inputDescripcionCita = element(by.id('descripcion'));
    private inputFechaCita = element(by.id('fecha'));
    private inputHoraCita = element(by.id('hora'));
    private inputIdPersonaCita = element(by.id('idPersona'));
    private buttonRegistrarCita = element(by.xpath('//*[@id="buttonRegistrarCita"]'));
    private buttonActualizarFormCita = element(by.xpath('//*[@id="buttonActualizarCita"]'));
    private listaCitas = element.all(by.xpath('/html/body/app-root/app-cita/app-listar-cita/table/tbody/tr'));
    private buttonEliminarCita = element(by.xpath('/html/body/app-root/app-cita/app-listar-cita/table/tbody/tr[1]/td[5]/button[2]'));
    private buttonActualizarCita = element(by.xpath('/html/body/app-root/app-cita/app-listar-cita/table/tbody/tr[1]/td[5]/button[1]'));
    private campoDescripcionCita = element(by.xpath('/html/body/app-root/app-cita/app-listar-cita/table/tbody/tr[1]/td[1]'));

    async clickBotonCrearCitas() {
        await this.linkCrearCita.click();
    }

    async clickBotonListarCitas() {
        await this.linkListarCitas.click();
    }

    async ingresarDescripcion(descripcionCita) {
        await this.inputDescripcionCita.sendKeys(descripcionCita);
    }

    async limpiarDescripcion() {
        await this.inputDescripcionCita.clear();
    }

    async ingresarFecha(fechaCita) {
        await this.inputFechaCita.sendKeys(fechaCita);
    }

    async ingresarHora(horaCita) {
        await this.inputHoraCita.sendKeys(horaCita);
    }

    async ingresarIdPersona(idPersonaCita) {
        await this.inputIdPersonaCita.sendKeys(idPersonaCita);
    }

    async clickBotonRegistrarCita() {
        await this.buttonRegistrarCita.click();
    }

    async contarCitas() {
        return this.listaCitas.count();
    }

    async clickBotonEliminarCita() {
        await this.buttonEliminarCita.click();
    }

    async clickBotonActualizarCita() {
        await this.buttonActualizarCita.click();
    }

    async getDescripcionCitas() {
        return this.campoDescripcionCita.getText();
    }

    async clickBotonActualizarFormCita() {
        await this.buttonActualizarFormCita.click();
    }
}
