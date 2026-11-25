import express from "express";
import type { Express, Request, Response } from "express";

const app: Express = express();
const PORT: number = 8081;

// Middleware obrigatório para o Express conseguir ler JSON enviado no body
app.use(express.json());

// Rota POST /mensagem
app.post("/mensagem", (req: Request, res: Response) => {
try {
    // Extrai os 3 dados do corpo da requisição
    const { nome, idade, timeFavorito } = req.body;

    // Validação simples para tratar erros caso algum dado esteja faltando
    if (!nome || !idade || !timeFavorito) {
    res.status(400).json({
        erro: "Dados incompletos. Informe nome, idade e timeFavorito."
    });
    return;
    }

    // Monta a frase exata pedida no enunciado
    const frase = `Olá, ${nome}! Você tem ${idade} anos e torce para o ${timeFavorito}!`;

    // Retorna status 200 (OK) com a mensagem
    res.status(200).json({
    mensagem: frase
    });
} catch (error) {
    // Tratamento caso ocorra algum erro inesperado na execução
    res.status(500).json({
    erro: "Erro interno ao processar a requisição."
    });
}
});

app.listen(PORT, () => {
console.log(`Servidor rodando em http://localhost:${PORT}`);
});