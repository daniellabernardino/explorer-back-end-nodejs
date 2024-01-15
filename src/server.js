const express = require ("express")

const app = express()

app.get("/message/:id/:user", (req, res) => {
  const {id, user } = req.params
 
  res.send(`
  Id da mensagem: ${id}.
  Para o usuário: ${user}.`)
})

const PORT = 3333
app.listen(PORT, () => console.log(`Server is runnion on Port ${PORT}`))