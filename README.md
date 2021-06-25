# README EM CRIAÇÃO

# NLW Valoriza
Este projeto serve como um backend para funcionar como API público para demonstrar a utilização da API do Nlw Valoriza. A ideia da aplicação é que os usuários 
cadastrados e logados no sistema possam elogiar uns aos outros, os usuários cadastrados como administradores são os únicos a ter permissões para poder criar tags para cada elogio que será feito por algum usuário.

![logo](https://user-images.githubusercontent.com/56320849/123468272-e90bb980-d5c7-11eb-9cd3-c15fb7988e1a.png)
<em>Logo criado em: https://hatchful.shopify.com/pt-BR/</em>

## Rodando servidor
O primeiro passo para executar o servidor é verificar se você possui o NodeJS instalado na sua máquina, caso contrário, baixe <a href="https://nodejs.org/en/download/">aqui</a>

Após a instalação, <a href="https://github.com/barretot/NLW-Valoriza">clone</a> este projeto em um local de sua preferência e com seu gerenciador de pacotes instale as dependências do projeto.

### Instalando dependências:

#### Yarn
```
$ yarn 
```

#### NPM

```
$ npm install
```

### Configurando Banco de Dados
A base de dados padrão utilizada pelo projeto é o banco de dados SQL <a href="sqlite.org/index.html">Sqlite</a>.

A configuração de geração de token de acesso foi criada utilizando variáveis de ambiente.

##### Criando variáveis de ambiente
Crie um arquivo na raiz do seu projeto com o nome de **`.env`** 
```
SECRET=2e0a4575774d2bd2b46ccae27de15a8d
```
### Iniciando servidor
Se você seguiu todos os passos acima, pode executar o servidor com os seguintes comandos:
#### Yarn
```
$ yarn start
```

#### NPM

```
$ npm run start
```
### Vizualizando coleções no banco de dados
Para ver as coleções criada pela aplicação, baixe o software <a href="https://www.beekeeperstudio.io/">Beekeeper Studio</a>, este software é responsável por gerenciar nossa base de dados. Como usamos o SQLITE basta criar uma conexão e passar o arquivo <a href="https://github.com/barretot/NLW-Valoriza/tree/master/src/database">database.sqlite</a> e a conexão ja será criada.

![image](https://user-images.githubusercontent.com/56320849/123468967-d80f7800-d5c8-11eb-9b24-c8332f8a8d4c.png)

## Project information

#### Dependencies

* <a href="https://www.npmjs.com/package/bcryptjs">bcryptjs</a>
* <a href="https://www.npmjs.com/package/class-transformer">class-transformer</a>
* <a href="https://www.npmjs.com/package/cors">cors</a>
* <a href="https://www.npmjs.com/package/dotenv">dotenv</a>
* <a href="https://www.npmjs.com/package/express">express</a>
* <a href="https://www.npmjs.com/package/express-async-errors">express-async-errors</a>
* <a href="https://www.npmjs.com/package/jsonwebtoken">jsonwebtoken</a>
* <a href="https://www.npmjs.com/package/reflect-metadata">reflect-metadata</a>
* <a href="https://www.npmjs.com/package/sqlite3">sqlite3</a>
* <a href="https://www.npmjs.com/package/typeorm">typeorm</a>
* <a href="https://www.npmjs.com/package/uuid">uuid</a>
* <a href="https://www.npmjs.com/package/yup">yup</a>


#### Dev Dependencies
* <a href="https://www.npmjs.com/package/ts-node-dev">ts-node-dev</a>
* <a href="https://www.npmjs.com/package/typescript">typescript</a>
* <a href="https://www.npmjs.com/package/@types/express">@types/express</a>
* <a href="https://www.npmjs.com/package/@types/uuid">@types/uuid</a>
* <a href="https://www.npmjs.com/package/@types/bcryptjs">@types/bcryptjs</a>
* <a href="https://www.npmjs.com/package/@types/dotenv">@types/dotenv</a>
* <a href="https://www.npmjs.com/package/@types/jsonwebtoken">@types/jsonwebtoken</a>







