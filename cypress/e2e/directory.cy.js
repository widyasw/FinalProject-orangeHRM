import DirectoryPage from '../pages/DirectoryPage'
import loginData from '../fixtures/loginData.json'
import directoryData from '../fixtures/DirectoryData.json'

describe('Directory Feature - OrangeHRM', () => {

  beforeEach(() => {
    cy.loginWithUI(
      loginData.valid.username,
      loginData.valid.password
    )
  })

  it('Open directory page', () => {
    DirectoryPage.openDirectoryPage()
    DirectoryPage.assertionDirectoryPageOpened()
  })

  it('Search employee exists', () => {
    DirectoryPage.openDirectoryPage()
    DirectoryPage.searchEmployee(directoryData.validEmployee)
    DirectoryPage.assertionEmployeeFound()
  })

  it('Search employee not found', () => {
    DirectoryPage.openDirectoryPage()
    DirectoryPage.searchEmployee(directoryData.invalidEmployee)
    DirectoryPage.assertionEmployeeNotFound()
  })
})
