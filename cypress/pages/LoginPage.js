class LoginPage {

  // elements
  usernameInput() {
    return cy.get('input.oxd-input').eq(0)
  }

  passwordInput() {
    return cy.get('input.oxd-input').eq(1)
  }

  loginButton() {
    return cy.get('button[type="submit"]')
  }

  errorMessage() {
    return cy.get('.oxd-alert-content-text')
  }

  requiredMessage() {
    return cy.get('.oxd-input-field-error-message')
  }

  // actions
  visit() {
    cy.visit('/web/index.php/auth/login')
  }

  login(username, password) {
    if (username) this.usernameInput().clear().type(username)
    if (password) this.passwordInput().clear().type(password)
    this.loginButton().click()
  }

  // assertions
  assertionLoginSuccess() {
    cy.location('pathname').should('include', '/dashboard')
    cy.contains('Dashboard').should('be.visible')
  }

  assertionInvalidCredentials() {
    this.errorMessage().should('contain', 'Invalid credentials')
  }

  assertionRequiredField() {
    this.requiredMessage().should('have.length.at.least', 1)
  }
}

export default new LoginPage()
