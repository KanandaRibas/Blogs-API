## Blogs-Api :mega:

Blogs-Api é um sistema para gerenciar blogs, possui endpoints para fazer operações CRUD - `Create (criar), Read (ler), Update (atualizar) e Delete (apagar)`, conectando ao banco de dados e segue os princípios do REST;

:large_blue_diamond: Para fazer um post é necessário usuário e senha, gerando um token para autenticação; 

:large_blue_diamond: Para manipular as informações do banco de dados, a API foi desenvolvida considerando a relação entre as tabelas `categories`, `posts` e `users`.

## Executando o projeto
1. Clone o repositório:
```bash
git clone git@github.com:KanandaRibas/Blogs-API.git
```

2. Entre no repositório que você acabou de clonar:
```bash
cd Blogs-API
```

3. Instale as dependências:
```bash
npm install
```

4. Execute o projeto com o Nodemon:
```bash
npm run debug
```

Para executar o projeto com o docker-compose:
```bash
docker-compose up -d --build
```

### Tecnologias utilizadas:
- [Node.js](https://nodejs.org/en/about)
- [Sequelize](https://sequelize.org/)
- [MySQL](https://www.mysql.com/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Docker](https://docs.docker.com/get-started/)

##

O projeto foi desenvolvido durante o curso de desenvolvimento Web Full Stack da [Trybe](https://app.betrybe.com).

:large_blue_diamond: Os arquivos dentro de `/src` foram desenvolvidos separando por responsabilidade em camadas Controllers, Services, Models e Migrations;

:large_blue_diamond: As configurações iniciais do sequelize, e os arquivos da pasta `/seeders` foram fornecidas pela Trybe.
