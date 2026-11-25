Aqui está o `README.md` completo em Markdown puro, documentando as 3 atividades, a estrutura de pastas e todos os endpoints para você colar diretamente no `README.md` da raiz do seu repositório:

```markdown
# Atividade Prática - Rotas POST com Express e TypeScript

Repositório contendo os projetos desenvolvidos em Node.js com Express e TypeScript para praticar a criação de servidores web, rotas do tipo `POST`, leitura do corpo da requisição (`req.body`), leitura de arquivos JSON, validação de dados, tratamento de erros e retorno de status HTTP adequados.

## 📂 Estrutura do Projeto

```text
atividade_1_post/
├── Atividade 1/
│   └── src/
│       └── app.ts          # Servidor da rota POST /mensagem (Porta 8081)
├── Atividade 2/
│   └── src/
│       └── app.ts          # Servidor da rota POST /soma (Porta 8082)
├── Atividade 3/
│   └── src/
│       ├── app.ts          # Servidor da rota POST /login (Porta 8083)
│       └── usuarios.json   # Base de credenciais esperadas para o login
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Tecnologias Utilizadas

* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)
* [TypeScript](https://www.typescriptlang.org/)
* [TSX](https://tsx.is/)

## ⚙️ Como Instalar e Executar

1. Clone o repositório e instale as dependências na raiz do projeto:
   ```bash
   npm install
   ```

2. Execute o servidor da atividade desejada pelo terminal:

   * **Atividade 1 (Porta 8081):**
     ```bash
     npx tsx "Atividade 1/src/app.ts"
     ```
   * **Atividade 2 (Porta 8082):**
     ```bash
     npx tsx "Atividade 2/src/app.ts"
     ```
   * **Atividade 3 (Porta 8083):**
     ```bash
     npx tsx "Atividade 3/src/app.ts"
     ```

---

## 📌 Documentação das Rotas

### 1. Atividade 1 — `POST /mensagem` (`http://localhost:8081/mensagem`)

Recebe três dados no corpo da requisição (`nome`, `idade` e `timeFavorito`), valida se todos foram preenchidos e retorna uma frase personalizada.

#### Exemplo de Requisição (Body - JSON)
```json
{
  "nome": "Carlos",
  "idade": 18,
  "timeFavorito": "Real Madrid"
}
```

#### Respostas Possíveis

* **Sucesso (`200 OK`):**
  ```json
  {
    "mensagem": "Olá, Carlos! Você tem 18 anos e torce para o Real Madrid!"
  }
  ```

* **Erro de Validação (`400 Bad Request`):** Retornado quando algum campo obrigatório não é informado.
  ```json
  {
    "erro": "Dados incompletos. Informe nome, idade e timeFavorito."
  }
  ```

---

### 2. Atividade 2 — `POST /soma` (`http://localhost:8082/soma`)

Recebe três valores (`num1`, `num2` e `num3`), valida se todos foram enviados e se são números válidos, e retorna o resultado da soma.

#### Exemplo de Requisição (Body - JSON)
```json
{
  "num1": 10,
  "num2": 25,
  "num3": 5
}
```

#### Respostas Possíveis

* **Sucesso (`200 OK`):**
  ```json
  {
    "resultado": 40
  }
  ```

* **Erro de Validação (`400 Bad Request`):** Retornado caso algum campo esteja ausente ou não seja numérico, listando os problemas encontrados.
  ```json
  {
    "erro": "Não foi possível realizar a soma devido aos seguintes problemas:",
    "detalhes": [
      "O campo 'num2' deve ser um valor numérico válido.",
      "O campo 'num3' é obrigatório."
    ]
  }
  ```

---

### 3. Atividade 3 — `POST /login` (`http://localhost:8083/login`)

Recebe `usuario` e `senha` no corpo da requisição, realiza a leitura do arquivo `usuarios.json` e verifica se as credenciais correspondem aos dados esperados.

#### Exemplo de Requisição (Body - JSON)
```json
{
  "usuario": "admin",
  "senha": "123456"
}
```

#### Respostas Possíveis

* **Sucesso (`200 OK`):**
  ```json
  {
    "mensagem": "Login realizado com sucesso! Bem-vindo, admin!"
  }
  ```

* **Credenciais Inválidas (`401 Unauthorized`):** Retornado quando usuário ou senha são diferentes do esperado.
  ```json
  {
    "erro": "Usuário ou senha incorretos."
  }
  ```

* **Erro de Validação (`400 Bad Request`):** Retornado quando usuário ou senha não são enviados na requisição.
  ```json
  {
    "erro": "Dados incompletos. Informe 'usuario' e 'senha'."
  }
  ```

* **Erro Interno (`500 Internal Server Error`):** Retornado em caso de falha na leitura do arquivo JSON ou erro inesperado no servidor.
  ```json
  {
    "erro": "Erro interno ao processar o login ou ler o arquivo de usuários."
  }
  ```

```