const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Olá! Você já está acessando o servidor")
})

app.listen(port, () => {
    console.log(`Servidor ativo na porta ${port}`)
})

// TIPOS DE OPERAÇÂO             ELEMENTOS
// -----------------             ----------------------------
// POST- salvar                  URL: http://minhaapi.com/rota
// GET - listar                  body
// DELETE - excluir              headers
// PUT - atualizar               query