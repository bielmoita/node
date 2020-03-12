console.log("Rodando pelo Gabriel!")

//Criar a identidade do projeto - Crio com npm init
//Observar que foi criado o arquivo package.json (Javascript object notation) que contem informações do projeto.
//Instalar o framework de node -> express
//Executar o comando: npm install express

var num1 = 19
var num2 = 6
let express = require('express')
let app = express()
let port = 3001 

app.get('/', (req,res) => {
    res.send('<h1>Calculadora BielMoita</h1>'+funcoes.soma(num1,num2))
})

 app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
})


//Importando as funções
var funcoes = require("../EX_1203/js/funcoes")

// var soma = funcoes.soma(19,6)
// console.log(soma)

// var subtracao = funcoes.subtracao(19,6)
// console.log(subtracao)

// var multiplica = funcoes.multiplica(19,6)
// console.log(multiplica)

// var divisao = funcoes.divisao(19,6)
// console.log(divisao)

