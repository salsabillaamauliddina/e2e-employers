export class LoginPage {
    masukButton = ':nth-child(2) > .sc-ivTmOn';
    companyEmail = ':nth-child(1) > .sc-fmrZth > .wrapper-input > .sc-iFwKgL';
    password = ':nth-child(2) > .sc-fmrZth > .wrapper-input > .sc-iFwKgL';
    submitButton ='.d-flex.my-3 > .sc-ivTmOn';

    clickButton () {
        cy.get(this.masukButton).click();
    }

    enterEmail () {
        cy.get(this.companyEmail)
            .type(Cypress.env('ENV_EMAIL_COMPANY'));
    }

    enterPassword () {
        cy.get(this.password)
            .type(Cypress.env('ENV_PASS_COMPANY'));
    }

    clickSubmit () {
        cy.get(this.submitButton).click();
    }
};