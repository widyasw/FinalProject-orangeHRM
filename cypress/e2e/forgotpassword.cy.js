import ForgotPasswordPage from '../pages/ForgotPasswordPage'

describe('Forgot Password Feature - OrangeHRM', () => {

  beforeEach(function () {
    cy.visit('/web/index.php/auth/login')
    cy.fixture('forgotPasswordData').as('data')
    ForgotPasswordPage.openForgotPasswordPage()
  })

  it('Open forgot password page', () => {
    ForgotPasswordPage.assertionForgotPasswordPageOpened()
  })

  it('Reset password with valid username', function () {
    ForgotPasswordPage.resetPassword(this.data.valid.username)
    ForgotPasswordPage.assertionResetPasswordSuccess()
  })

  it('Reset password with empty username', () => {
    ForgotPasswordPage.resetPassword('')
    ForgotPasswordPage.assertionRequiredField()
  })

  it('Cancel reset password', () => {
    ForgotPasswordPage.cancelReset()
    ForgotPasswordPage.assertionBackToLogin()
  })
})