import { LoginPage } from './pages/login.cy';
const loginPage = new LoginPage();


describe('All login pages test', () => {
    beforeEach(() => {
        cy.visit('https://dev.employers.klob.id/')
    });


    it ('Login with valid credentials', () => {
        loginPage.clickButton();
        loginPage.enterEmail();
        // loginPage.enterPassword();
        // loginPage.clickSubmit();
    });
});