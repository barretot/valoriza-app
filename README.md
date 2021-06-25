# README EM CRIAÇÃO

# NLW Valoriza
Este projeto serve como um backend para funcionar como API público para demonstrar a utilização da API do Nlw Valoriza. A ideia da aplicação é que os usuários 
cadastrados e logados no sistema possam elogiar uns aos outros, os usuários cadastrados como administradores são os únicos a ter permissões para poder criar tags para cada elogio que será feito por algum usuário.


<em>Logo criado em: https://hatchful.shopify.com/pt-BR/</em>

## Rodando servidor
O primeiro passo para executar o servidor é verificar se você possui o NodeJS instalado na sua máquina, caso contrário, baixe <a href="https://nodejs.org/en/download/">aqui</a>

Após a instalação, <a href="https://github.com/barretot/SingUp-SigIn-App">clone</a> este projeto em um local de sua preferência e com seu gerenciador de pacotes instale as dependências do projeto.

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
A base de dados padrão utilizada pelo projeto é o banco de dados NoSQL <a href="https://docs.mongodb.com/">MongoDB</a>, utilizando um serviço chamado <a href="https://www.mongodb.com/cloud/atlas">MongoDB Atlas</a> onde clusters são criados e todos os dados são guardados na nuvem.

A configuração da base de dados foi criada com variáveis de ambiente, então é necessário citar todas estas variáveis para o servidor.

##### Criando variáveis de ambiente
Crie um arquivo na raiz do seu projeto com o nome de **`.env`** 
```
MONGO_USERNAME=admin
MONGO_PASSWORD=admin
MONGO_COLLECTION_NAME=Users
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
Para ver as coleções criada pela aplicação, baixe o software <a href="https://www.mongodb.com/try/download/compass">MongoDB Compass</a>, este software é responsável por mostrar as coleções criadas nos clusters pela nossa aplicação.

Após instalar o <a href="https://www.mongodb.com/try/download/compass">MongoDB Compass</a> em sua máquina, cole esta connection string no campo que é pedido e terá acesso as coleções.

```
mongodb+srv://admin:admin@ecommerce.ustac.mongodb.net/test
```
![image](https://user-images.githubusercontent.com/56320849/122455490-d4557300-cf82-11eb-9037-0c29707bbd45.png)

### Executando testes
Os testes foram implementados usando a biblioteca <a href="https://jestjs.io/">jest</a>. Para executar os testes, crie um arquivo chamado **`.env.test`** para citar as variáveis de ambiente dos testes e coloque as seguintes informações:
```
MONGO_USERNAME=admin
MONGO_PASSWORD=admin
MONGO_COLLECTION_NAME=Tests
```

#### Rodando testes

#### Yarn
```
$ yarn test
```

#### NPM

```
$ npm run test
```
Uma coleção chamada Tests será criada na base de dados.

## Project information

### Code Linter
Este projeto utiliza um linter de código chamado <a href="https://www.npmjs.com/package/eslint">Eslint</a> configurado com <a href="https://www.npmjs.com/package/eslint-config-airbnb-base">Airnbnb linteres.</a> As configurações dos linteres estão no arquivo <a href="https://github.com/barretot/SingUp-SigIn-App/blob/master/.eslintrc.js">.eslintrc.js</a> e <a href="https://github.com/barretot/SingUp-SigIn-App/blob/master/.prettierrc">.prettierrc </a>  O arquivo <a href="https://github.com/barretot/SingUp-SigIn-App/blob/master/.editorconfig">.editorconfig</a> configura o projeto para atender a determinados linteres para qualquer editor aceitar, para ler mais acesse <a href="https://editorconfig.org/"> EditorConfig documentation</a>

#### Dependencies

* <a href="https://www.npmjs.com/package/mongoose">Mongoose</a>
* <a href="https://www.npmjs.com/package/express">Express</a>  
* <a href="https://www.npmjs.com/package/dotenv">Dotenv</a> 
* <a href="https://www.npmjs.com/package/yup">Yup</a> 
* <a href="https://www.npmjs.com/package/bcryptjs">BcryptJs</a> 
* <a href="https://www.npmjs.com/package/jsonwebtoken">JsonWebToken</a> 
* <a href="https://www.npmjs.com/package/bcryptjs">BcryptJs</a> 
* <a href="https://www.npmjs.com/package/uuidv4">uuidv4</a> 


#### Dev Dependencies
* <a href="https://www.npmjs.com/package/eslint">Eslint</a>
* <a href="https://www.npmjs.com/package/eslint-config-airbnb-base">Eslint-config-airbnb-base</a>
* <a href="https://www.npmjs.com/package/eslint-config-prettier">Eslint-config-prettier</a>
* <a href="https://www.npmjs.com/package/eslint-plugin-prettier">Eslint-plugin-prettier</a>
* <a href="https://www.npmjs.com/package/eslint-plugin-import">Eslint-plugin-import</a> 
* <a href="https://www.npmjs.com/package/prettier">Prettier</a>
* <a href="https://www.npmjs.com/package/jest">Jest</a>
* <a href=https://www.npmjs.com/package/@shelf/jest-mongodb>@shelf/jest-mongodb</a>
* <a href="https://www.npmjs.com/package/supertest">Supertest</a>
* <a href="https://www.npmjs.com/package/ts-jest">ts-jest</a>
* <a href="https://www.npmjs.com/package/ts-node-dev">ts-node-dev</a>
* <a href="https://www.npmjs.com/package/typescript">TypeScript</a>






