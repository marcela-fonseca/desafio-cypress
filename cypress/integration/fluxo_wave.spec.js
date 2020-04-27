describe('Testar fluxos na wave', () => {
  var email = cy.faker.internet.email();

  beforeEach (() => {
    cy.login('testesandbox01@dev.com.br', 'Inicial@1234')
  })

  it('Acessar dados cadastrais e alterar dados ', () => {
    cy.get(':nth-child(6) > > :nth-child(1) .v-list__tile__title').click()
    cy.get('[style=""] > :nth-child(2) > .v-list__group__header').click()
    cy.wait(1000)
    cy.get('[data-test=edit-password]').click()
    cy.wait(5000)
    cy.get('[data-test=account-complete-name]').clear().type("Ken teste")
    cy.get('[data-test=account-birth-date]').clear().type('13031992')
    cy.get('[data-test=account-mother-name]').clear().type('novo123')
    cy.get('[data-test=account-zipCode]').clear().type('07700230').blur()
    cy.get('[data-test=account-street-number]').type('62')
    cy.get('[data-test=save-edit]').click()
    cy.wait(1000)
    cy.get(' li:nth-child(4) .tag__content-wrapper > div').should('contain', 'novo123')
  })

  it.skip('Acessar cobranças ', () => {
    cy.visit("https://conta-beta-sandbox.wirecard.com.br/criar-cobranca")
    cy.wait(5000)
    cy.get('.news-banner__close-button > .icon').click()
    cy.get('#amount').type(1000)
    cy.get('#reason').type("teste")
    cy.get('[aria-label="E-mail para envio"]').type(`${email}{enter}`)
    cy.get('.transference-card__actions button > div').click()
    cy.wait(1000)
    cy.get('[aria-label="Pagamento por cartão"]').click({force : true})
    cy.get('[name="installments"]').click()
    cy.get('li:nth-child(4) > span').click()
    cy.get('.transference-card__actions button > div').click()
    cy.wait(1000)
    cy.get(':nth-child(1) > .custom-button__btn-element').click()
    cy.wait(3000)
    cy.get('.page-header__title').should('contain','Detalhes da cobrança')
    cy.get('.user-avatar__identity-name').should('contain', email)
  })
})
