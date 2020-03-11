console.log("Ola Mundo!")

//Criar a identidade do projeto - Crio com npm init
//Observar que foi criado o arquivo package.json (Javascript object notation) que contem informações do projeto.
//Instalar o framework de node -> express
//Executar o comando: npm install express

let express = require('express')
let app = express()
let port = 3000
app.get('/', (req,res) => {
    res.send('<h1>HOME</h1>')
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
})