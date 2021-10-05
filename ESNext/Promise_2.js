
/*
setTimeout(() => {
    console.log('executando callback 1 ...')

    setTimeout(() => {
        console.log('executando callback 2 ...')

        setTimeout(() => {
            console.log('executando callback 3 ...')
        }, 3000)
    }, 3000)
}, 3000)
*/

function wait(time = 2000) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`executando a promise...`)
            resolve()
        }, time)
    })
}


//todo | essas duas formas são boas para chamar uma função, mas convenhamos que o primeiro then é mais legivel
wait().then(() => wait()).then(wait)