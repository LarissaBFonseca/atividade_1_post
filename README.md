# Atividade Prática - Rotas POST com Express e TypeScript

Repositório contendo os projetos desenvolvidos em Node.js com Express e TypeScript para praticar a criação de servidores web, rotas do tipo `POST`, leitura do corpo da requisição (`req.body`), validação de dados, tratamento de erros e retorno de status HTTP adequados.

## 📂 Estrutura do Projeto

```text
atividade_1_post/
├── Atividade 1/
│   └── src/
│       └── app.ts      # Servidor da rota POST /mensagem (Porta 8081)
├── Atividade 2/
│   └── src/
│       └── app.ts      # Servidor da rota POST /soma (Porta 8082)
├── Atividade 3/
│   └── src/
│       └── app.ts      # Servidor da rota POST /login
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

1. Instale as dependências na raiz do projeto:
   ```bash
   npm install
   ```

2. Execute o servidor da atividade desejada pelo terminal:

   * **Para rodar a Atividade 1:**
     ```bash
     npx tsx "Atividade 1/src/app.ts"
     ```
   * **Para rodar a Atividade 2:**
     ```bash
     npx tsx "Atividade 2/src/app.ts"
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

* **Erro Interno (`500 Internal Server Error`):** Retornado em caso de falha inesperada na execução do servidor.
  ```json
  