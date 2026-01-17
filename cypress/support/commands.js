import LoginPage from '../pages/LoginPage'

Cypress.Commands.add('loginWithUI', (username, password) => {
  cy.intercept('POST', '**/auth/validate').as('loginRequest')

  LoginPage.visit()
  LoginPage.login(username, password)

  cy.wait('@loginRequest')
    .its('response.statusCode')
    .should('eq', 302)

  LoginPage.assertionLoginSuccess()
})