export class LoginPage {
    masukButton = ':nth-child(2) > .sc-ivTmOn';
    companyEmail = ':nth-child(1) > .sc-fmrZth > .wrapper-input > .sc-iFwKgL';
    password = ':nth-child(2) > .sc-fmrZth > .wrapper-input > .sc-iFwKgL';
    submitButton ='.d-flex.my-3 > .sc-ivTmOn';
    errorMessage ='.go2072408551';

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

    invalidEmail () {
        cy.get(this.companyEmail)
            .type('company@gmail.com');
    }

    invalidPassword () {
        cy.get(this.password)
            .type('123123123');
    }

    clickSubmit () {
        cy.get(this.submitButton).click();
    }

    notifyError () {
        cy.get(this.errorMessage)
            .should('be.visible');
    }
};