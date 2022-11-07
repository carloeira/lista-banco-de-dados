const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

const produtoRota = require("./controllers/produto/router.js")
const usuarioRouter = require("./controllers/usuario/router.js");
const comentarioRouter = require("./controllers/comentario/router.js");
const carrinhoRouter = require('./controllers/carrinho/router.js');

app.get('/', (req, res) => {
  res.send('A documentação da api')
})

app.use(express.json())
app.use(cors())

app.use('/', produtoRota)
app.use('/', comentarioRouter)
app.use('/', usuarioRouter); //ei servidor, fica de olho nessas rotas
app.use('/', carrinhoRouter);

app.use((req, res) => {
  res.status(404).send("{message: rota não encontrada}")
})

app.listen(port, () => {
  console.log(`Rodando no link http://localhost:${port}`)
})