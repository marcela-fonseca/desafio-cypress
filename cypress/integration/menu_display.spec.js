describe('Validate Wave Menu Display', () => {
  it('Click on Minhas Vendas and validate menu display', () => {
    cy.visit('https://conta-beta-sandbox.wirecard.com.br')
    cy.get('#login').type("akuma@labs.moip.com.br")
    cy.get('#password').type("Moip0001")
    cy.get('[type="submit"]').click()
    cy.get('.tutorial__close-button > .icon').click()
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .v-list__tile > .v-list__tile__title').click()
    cy.get('a[href="/pedidos"]').first().click()
    cy.get('.empty-state__title').contains('Está vazio por aqui…')
  })
})