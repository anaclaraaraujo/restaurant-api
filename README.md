
# Projeto Restaurant Orders API

**Restaurant Orders API** é uma aplicação RESTful para gerenciar pedidos de mesas em um restaurante. O sistema permite criar, visualizar, atualizar e excluir produtos, além de consultar produtos disponíveis para compor os pedidos.

## Tecnologias Utilizadas
<p>
	<img alt="Node.js version" src="https://img.shields.io/static/v1?label=Node.js&message=18.x&color=18181B&labelColor=339933">
	<img alt="Express version" src="https://img.shields.io/static/v1?label=Express&message=4.19.2&color=18181B&labelColor=000000">
	<img alt="Knex.js version" src="https://img.shields.io/static/v1?label=Knex&message=3.1.0&color=18181B&labelColor=476069">
	<img alt="SQLite version" src="https://img.shields.io/static/v1?label=SQLite&message=5.1.7&color=18181B&labelColor=003B57">
	<img alt="TypeScript version" src="https://img.shields.io/static/v1?label=TypeScript&message=5.5.4&color=18181B&labelColor=3178C6">
  <a href="https://wakatime.com/badge/user/30563c84-4568-4594-9bbe-b31f0effd26b/project/537b4bb1-a3d8-41c1-a2bd-d55a6ffd0f79">
    <img src="https://wakatime.com/badge/user/30563c84-4568-4594-9bbe-b31f0effd26b/project/537b4bb1-a3d8-41c1-a2bd-d55a6ffd0f79.svg" alt="wakatime">
  </a>
</p>

# Funcionalidades
- CRUD de produtos (criação, leitura, atualização e exclusão).
- Validação de dados de entrada com `zod`.
- Ordenação e busca de produtos por nome.
- Migrações e seeds com `Knex.js` para gerenciar o banco de dados.
- Tratamento de erros com middleware customizado.

# Requisitos

- Node.js (versão mínima 18.x.x)

# Instalação

## 1. Clonar o Repositório

Para começar, clone o repositório do projeto para sua máquina local:

```bash
git clone https://github.com/anaclaraaraujo/api-restaurant
```

### 2. Acessar o Diretório do Projeto

Após clonar o repositório, navegue até o diretório do projeto:

```bash
cd api-restaurant
```

### 3. Instalar Dependências

Instale todas as dependências listadas no `package.json` com o comando:

```bash
npm install
```

### 4. Configurar o Banco de Dados

Este projeto usa **SQLite**. As migrações já estão configuradas. Para criar o banco de dados e as tabelas necessárias, execute o seguinte comando:

```bash
npm run knex -- migrate:latest
```

### 5. Popular o Banco de Dados (Opcional)

Para adicionar alguns produtos de exemplo ao banco de dados, rode os seeds:

```bash
npm run knex -- seed:run
```

### 6. Inicializar o Servidor

Agora, inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O servidor será iniciado na porta 3333, e a API estará disponível para consumo.

# Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.