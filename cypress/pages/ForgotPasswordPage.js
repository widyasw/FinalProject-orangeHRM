class ForgotPasswordPage {

  // elements
  forgotPasswordLink() {
    return cy.contains('Forgot your password?')
  }

  usernameInput() {
    return cy.get('input[name="username"]')
  }

  resetButton() {
    return cy.get('button[type="submit"]')
  }

  cancelButton() {
    return cy.contains('Cancel')
  }

  requiredMessage() {
    return cy.get('.oxd-input-field-error-message')
  }

  successTitle() {
    return cy.contains('Reset Password link sent successfully')
  }

  // actions
  openForgotPasswordPage() {
    this.forgotPasswordLink().click()
  }

  resetPassword(username) {
    if (username) this.usernameInput().clear().type(username)
    this.resetButton().click()
  }

  cancelReset() {
    this.cancelButton().click()
  }

  // assertions
  assertionForgotPasswordPageOpened() {
    cy.location('pathname')
      .should('include', '/auth/requestPasswordResetCode')
  }

  assertionResetPasswordSuccess() {
    this.successTitle().should('be.visible')
  }

  assertionRequiredField() {
    this.requiredMessage().should('contain', 'Required')
  }

  assertionBackToLogin() {
    cy.location('pathname').should('include', '/auth/login')
    cy.contains('Login').should('be.visible')
  }
}

export default new ForgotPasswordPage()
