const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

const promise = new Promise(function(resolve) {
    resolve(['Ana', 'Bia', '...'])
})

promise.then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    .then(letra => console.log(letra))
    // ou
    //.then(console.log())