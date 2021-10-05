let elric = [
    ["baixo", {baixo: true}],
    ["forte", {forte: true}],
    ["inteligente", {inteligente: true}],
    ["cortês", {cortes: false}],
    ["tem irmão", {temIrmao: true}]
]

/*
   ? para receber tudo que o for of pode fazer através de um array,
   ? primeiro crie uma varivel de tipo array e faça um .push na variavel dentro do for
   ? passando os resultado dentro do .push e assim ele terá o valor que vc quer
*/
function fullmetal () {
    //todo  metodo of dentro do for
    let result1 = new Array()
    for(let string of elric) {
        result1.push(string)
    }
    
    console.log("este é o for com of: ---------------------------------> ")
    console.log(result1)
    
    //todo  metodo sem of dentrodo for
    let result2 = new Array()
    
    for (let i = 0; i < elric.length; i++) {
        result2.push(elric[i])
    } 

    console.log("este é o for normal: ---------------------------------> ")
    console.log(result2)
}

fullmetal()