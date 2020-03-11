const titulo = "Generation - Node JS"


function LetraMaiscula(nome)
{
    return nome.toUpperCase()
    
}
function letraMinuscula(nome)
{
    return nome.toLowerCase()
}
function totalLetras(nome)
{
    return (nome.length)
}

module.exports=
{
    LetraMaiscula,
    letraMinuscula,
    totalLetras,
    titulo
}