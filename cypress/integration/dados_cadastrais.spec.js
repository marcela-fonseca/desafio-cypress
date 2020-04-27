///<reference types="cypress"/>
describe('Dados Cadastrais', () => {
  it('Acessar site da wave e fazer login com sucesso ', () => {
    cy.visit('https://conta-beta-sandbox.wirecard.com.br')
    cy.get('#login').type("akuma@labs.moip.com.br")
    cy.get('#password').type("Moip0001")
    cy.get('[data-test=button-login]').click()
    cy.wait(10000)
    cy.get('.tutorial__close-button > .icon').click()
    cy.get(':nth-child(6) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .v-list__tile > .v-list__tile__title').click()
    cy.get('a[href="/minha-conta"]').click()
    cy.get('[data-test="edit-password"').click()
    cy.get('[data-test=account-site]').clear({force: true}).type('www.teste.com',{force: true })
    cy.scrollTo(0, 500)
    cy.get('[data-test=save-edit]').click()
    cy.get('.notice__content').contains('As alterações da conta foram salvas com sucesso.')
    cy.get('.double-panels__right > .info-panel > :nth-child(1) > .info-panel__content > .info-panel__list > :nth-child(2) > .tag > .tag__content-wrapper > .tag__slot').contains('www.teste.com')
  })
})