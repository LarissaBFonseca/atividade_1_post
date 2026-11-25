import express from "express";
import type { Express, Request, Response } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app: Express = express();
const PORT: number = 8083;

// Configuração para localizar o arquivo JSON na mesma pasta do app.ts
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

// Rota POST /login
app.post("/login", (req: Request, res: Response) => {
try {
    const { usuario, senha } = req.body;

    // 1. Verifica se usuário e senha foram enviados na requisição
    if (!usuario || !senha) {
    res.status(400).json({
        erro: "Dados incompletos. Informe 'usuario' e 'senha'."
    });
    return;
    }

    // 2. Realiza a leitura do arquivo usuarios.json
    const caminhoArquivo = path.join(__dirname, "usuarios.json");
    const dadosBrutos = fs.readFileSync(caminhoArquivo, "utf-8");
    const credenciaisEsperadas = JSON.parse(dadosBrutos);

    // 3. Verifica se o usuário e a senha informados estão corretos
    if (
    usuario !== credenciaisEsperadas.usuario ||
    senha !== credenciaisEsperadas.senha
    ) {
    res.status(401).json({
        erro: "Usuário ou senha incorretos."
    });
    return;
    }

    // 4. Retorno de sucesso (Status 200)
    res.status(200).json({
    mensagem: `Login realizado com sucesso! Bem-vindo, ${usuario}!`
    });
} catch (error) {
    res.status(500).json({
    erro: "Erro interno ao processar o login ou ler o arquivo de usuários."
    });
}
});

app.listen(PORT, () => {
console.log(`Servidor rodando em http://localhost:${PORT}`);
});