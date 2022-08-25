import { LoginPage } from './pages/login.cy';
import { SubscriptionPage } from './pages/subscription.cy';

const loginPage = new LoginPage();
const subscription = new SubscriptionPage();


describe('All pages test', () => {
    beforeEach(() => {
        cy.visit('https://dev.employers.klob.id/')
    });


    it ('Login with valid credentials', () => {
        loginPage.clickButton();
        loginPage.enterEmail();
        loginPage.enterPassword();
        loginPage.clickSubmit();
    });

    it('Login with invalid credentials', () => {
        loginPage.clickButton();
        loginPage.invalidEmail();
        loginPage.invalidPassword();
        loginPage.clickSubmit();
        loginPage.notifyError();
    })

    // it('Subscription Preview Tests', () => {
    //     loginPage.clickButton();
    //     loginPage.enterEmail();
    //     loginPage.enterPassword();
    //     loginPage.clickSubmit();
    //     subscription.clickPreview();
    // })

    // it('Subscription Edit Preview Tests', () => {
    //     loginPage.clickButton();
    //     loginPage.enterEmail();
    //     loginPage.enterPassword();
    //     loginPage.clickSubmit();
    //     subscription.clickEditView();
    // })
});

