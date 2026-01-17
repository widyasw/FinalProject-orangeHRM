import LoginPage from '../pages/LoginPage'

describe('Login Feature - OrangeHRM', () => {

  beforeEach(function () {
    cy.intercept('POST', '**/auth/validate').as('loginRequest')
    LoginPage.visit()
    cy.fixture('loginData').as('data')
  })

  it('Valid login', function () {
    LoginPage.login(
      this.data.valid.username,
      this.data.valid.password
    )
    cy.wait('@loginRequest')
      .its('response.statusCode')
      .should('eq', 302)
    LoginPage.assertionLoginSuccess()
  })

  it('Invalid login', function () {
    LoginPage.login(
      this.data.invalid.username,
      this.data.invalid.password
    )

    cy.wait('@loginRequest')
    LoginPage.assertionInvalidCredentials()
  })

  it('Username valid & password empty', function () {
    LoginPage.login(this.data.valid.username, '')
    LoginPage.assertionRequiredField()
  })

  it('Username empty & password valid', function () {
    LoginPage.login('', this.data.valid.password)
    LoginPage.assertionRequiredField()
  })

  it('Username & password empty', function () {
    LoginPage.login('', '')
    LoginPage.assertionRequiredField()
  })
})