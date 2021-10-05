const http = require('http')

const getTurma = (letra) => {
	const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
	return new Promise((resolve, reject) => {
		http.get(url, (res) => {
			let resultado = "";

			res.on("data", (dados) => {
				resultado += dados;
			});

			res.on("end", () => {
				try {
						resolve(JSON.parse(resultado))
				} catch(e) {
					 reject(e)
				}
			});
		});
	});
};

const obterAlunos = async () => {
    const TurmaA = getTurma('A')
    const TurmaB = getTurma('B')
    const TurmaC = getTurma('C')

    return [].concat(TurmaA, TurmaB, TurmaC)
}

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))