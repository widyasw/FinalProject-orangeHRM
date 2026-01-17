class DirectoryPage {

  // elements
  directoryMenu() {
    return cy.contains('Directory')
  }

  employeeNameInput() {
    return cy.get('input[placeholder="Type for hints..."]')
  }

  searchButton() {
    return cy.get('button[type="submit"]')
  }

  employeeCards() {
    return cy.get('.oxd-sheet')
  }

  noRecordsFound() {
    return cy.contains('No Records Found')
  }

  // actions
  openDirectoryPage() {
    this.directoryMenu().click()
  }

  searchEmployee(name) {
    this.employeeNameInput().clear().type(name)
    this.searchButton().click()
  }

  // assertions
  assertionDirectoryPageOpened() {
    cy.location('pathname')
      .should('include', '/directory/viewDirectory')
  }

  assertionEmployeeFound() {
    this.employeeCards()
      .should('have.length.at.least', 1)
  }

  assertionEmployeeNotFound() {
    this.noRecordsFound()
      .should('be.visible')
  }
}

export default new DirectoryPage()
