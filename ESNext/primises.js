function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos + 1000)

        // reject("está demorando")
    }) 
}

falarDepoisDe(3, 'Que legal Oliver')
    .then(frase => frase.concat('!!!'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))