import { by, element } from 'protractor';

export class NavbarPage {
    linkHome = element(by.xpath('/html/body/app-root/app-navbar/nav/a[1]'));
    linkPersona = element(by.xpath('/html/body/app-root/app-navbar/nav/a[2]'));
    linkCita = element(by.xpath('/html/body/app-root/app-navbar/nav/a[3]'));

    async clickBotonPersonas() {
        await this.linkPersona.click();
    }

    async clickBotonCitas() {
        await this.linkCita.click();
    }
}
