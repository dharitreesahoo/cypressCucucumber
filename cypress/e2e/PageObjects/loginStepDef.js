import { Before, After, Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'
Before(() => {
    cy.reload()
})
After(() => {
    cy.reload()
})

Given('I open login page', () => {
    LoginPage.visitLoginPage()
})
// When('I submit login', () => {
//     LoginPage.fillUserName("standard_user")
//     LoginPage.fillPassword("secret_sauce")
//     LoginPage.submit()
// })
When('I fill username with {string}', (username) => {
    LoginPage.fillUserName(username)
})
And('I fill password with {string}', (password) => {
    LoginPage.fillPassword(password)
})
And('I click submit login', () => {
    LoginPage.submit()
})
Then('I should see homepage', () => {
    cy.get('.app_logo').should('be.visible')
})
Then('I should see error message', () => {
    cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
})
When('I login as following user', (datatable) => {
    datatable.hashes().forEach(element => {
        LoginPage.fillUserName(element.username)
        LoginPage.fillPassword(element.password)
    });

})