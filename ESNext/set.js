// não aceita repetição e não é indexada
const times = new Set()

times.add('Vasco')
times.add('São paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times)