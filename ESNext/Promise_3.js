function randomNumberGenerator (min, max) {
    if ( min > max) {
        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

randomNumberGenerator(10, 30)
    .then(number => `o número aleatório é ${number}`)
    .then(number => console.log(number))