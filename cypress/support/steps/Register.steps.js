/// <reference types="Cypress" />


import Register from '../elements/Register.elements';


describe('Acessar site', () => {
    it('acesso a pagina de login do site de compras', () => {
        Register.acessarCadastro();
    });


});
