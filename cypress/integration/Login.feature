Feature: Login site de compras

    Background: Acessar o site de compras
        Given acesso o site de compras

    @testeum
    Scenario: Criar uma conta no site
        Given acesso a pagina de login
        And informo <email> 
        When clico no botão de realizar login
        Then devo visualizar mensagem de cadastro realizado com sucesso
     
