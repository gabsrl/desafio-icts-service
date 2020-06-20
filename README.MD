
## Sobre o projeto

Este repositório se destina ao desafio  de uma aplicação de um CRUD de produtos para uma loja virtual hipótetica proposta pelo ICTS- Manaus para uma oportunidade de trabalho. Este repositório compreende o serviço da aplicação.

## Inicialização do projeto
É assumido que o MongoDB já esteja instalado, que o serviço do MongoDB esteja sendo executado.
No mongo shell será preciso criar um banco de dados chamado 'desafio-icts' e uma collection chamada 'Product'
Dito isto, basta clonar o repositório e realizar o comando:
### `yarn`
Então todas as dependências  app serão instaladas. Agora com todas as dependências instaladas realize o comando:
 ### `yarn dev`
para abrir o servidor de modo de desenvolvimento onde a aplicação será servida em  [http://localhost:3333](http://localhost:3333).


## Sobre o desenvolvimento
Esta aplicação foi desenvolvida utilizando NodeJS com o framework ExpressJS, MongoDB como banco de dados e a biblioteca mongoose como ORM para acesso e manipulação do banco de dados. O Serviço foi desenvolvido seguindo a ideia do padrão MVC, entretanto, a "View" servida é um JSON.
