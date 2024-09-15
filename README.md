![Logo MySide](/public/images/myside-logo.svg)

# Teste técnico - Victor Luis Teixeira Reis
![alt text](/public/screenshots/main.png)
![alt text](/public/screenshots/product.png)

Projeto de página de e-commerce feito com Next.JS e usando os dados da API [https://fakestoreapi.in](https://fakestoreapi.in). Conta com recursos como:

- Paginação
- Filtragem por categoria
- Pesquisa por nome do produto
- Funcionalidade de carrinho

## Como acessar o projeto

O projeto está no ar na vercel e pode ser acessado pelo link: [https://teste-victor-luis.vercel.app/](https://teste-victor-luis.vercel.app/)

## Como rodar o projeto localmente

Para rodar localmente o projeto, clone o repositório:

```bash
git clone https://github.com/victorluis22/teste-tecnico-myside.git
```

Instale a node_modules:

```bash
npm install
```

Inicie o servidor:
```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no browser para ver os resultados.

## Testando

Foram criados testes unitários para cada página do projeto usando [Jest](https://jestjs.io/pt-BR/) e [React Testing Library](https://testing-library.com/). Para rodar os testes, basta usar o comando:

```bash
npm run test
```

## Arquitetura do código
- ```/src```: Pasta onde está todo o código.
- ```/src/components```: Pasta onde estão todos os componentes de cada página.
- ```/src/__tests__```: Pasta onde estão todos os testes unitários de cada página e de funções auxiliares do código.
- ```/src/config```: Pasta onde estão configurações de estilo globais.
- ```/src/pages```: Pasta onde estão as páginas da aplicação.
- ```/src/context```: Pasta onde está a configuração de context do sistema de carrinho de compras.
- ```/src/services```: Pasta onde estão algumas funções básicas usadas em vários lugares do código.
- ```/src/styles```: Pasta onde estão os estilos de cada página.



