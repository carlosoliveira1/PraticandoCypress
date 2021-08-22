/// <reference types="cypress" />




describe('Acesso', () => {
    it('Usuario deve poder se registrar', () => {
        cy.visit('http://automationpractice.com/index.php');

        cy.get('.login').click();
        cy.get('#email_create').type('cmauricio@test.com');
        cy.get('#SubmitCreate > span').click();


        cy.wait(10000);



    })
})