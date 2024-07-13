const URL = 'https://www.saucedemo.com/'
const USERNAME = '#user-name'
const PASSWORD = '#password'
const SUBMIT = '#login-button'

class LoginPage {
    static visitLoginPage() {
        cy.visit(URL)
    }
    static fillUserName(name) {
        cy.get(USERNAME).type(name)
    }
    static fillPassword(password) {
        cy.get(PASSWORD).type(password)
    }
    static submit() {
        cy.get(SUBMIT).click()
    }
}
export default LoginPage