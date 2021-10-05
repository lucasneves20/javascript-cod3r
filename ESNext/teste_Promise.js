function number (validation) {
    return new Promise((resolve, reject) => {
        if (validation) {
            resolve('é true')
        } else {
            reject('não é true')
        }
    })
}

number(10)
    .then(number => console.log(number))
    .catch(e => console.log(e))
