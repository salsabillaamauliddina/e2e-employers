export class LoginPage {
    masukButton = ':nth-child(2) > .sc-ivTmOn';
    companyEmail = ':nth-child(1) > .sc-fmrZth > .wrapper-input > .sc-iFwKgL';
    password = ':nth-child(2) > .sc-fmrZth > .wrapper-input > .sc-iFwKgL';
    submitButton ='.d-flex.my-3 > .sc-ivTmOn';

    clickButton () {
        cy.get(this.masukButton).click();
    }

    enterEmail (email) {
        cy.get(this.companyEmail)
            .should('not.be.empty')
            .and();
    }

    enterPassword (password) {
        cy.get(this.password).type(password);
    }

    clickSubmit () {
        cy.get(this.submitButton).click();
    }
};