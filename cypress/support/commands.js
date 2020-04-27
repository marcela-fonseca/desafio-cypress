
function login(email, password) {

  cy.visit("https://conta-beta-sandbox.wirecard.com.br", {
    onBeforeLoad: (win) => {
      win.sessionStorage.clear()
    }
  })

  cy.get('#login').type(email)
  cy.get('#password').type(password)
  cy.get('[data-test="button-login"]').click()
  cy.wait(5000)
  cy.get('.tutorial__close-button > .icon').click()

}

Cypress.Commands.add('login', (email, password) => { login(email, password) })


