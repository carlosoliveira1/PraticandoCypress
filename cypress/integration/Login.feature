Feature: Login site de compras

    Background: Acessar o site de compras
        Given acesso o site de compras

    @testeum
    Scenario: Criar uma conta no site
        //Given que nao possuo conta no site de compras
        And acesso a pagina de login do site de compras
        And clico no botao sigin
        And informo o email na area create an account
        When clico no botão create an account
        Then sou direcionado para a tela de autenticacao
     
