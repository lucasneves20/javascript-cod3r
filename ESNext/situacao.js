// sem promise ...
const http = require("http");

const getTurmaC = (letra, callback) => {
	const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
	http.get(url, (res) => {
		let resultado = "";

		res.on("data", (dados) => {
			resultado += dados;
		});

		res.on("end", () => {
			callback(JSON.parse(resultado));
		});
	});
};

//console.log("callback hell: ");
let nomes = [];
getTurmaC("A", (alunos) => {
	nomes = nomes.concat(alunos.map((a) => `A: ${a.nome}`));
	getTurmaC("B", (alunos) => {
		nomes = nomes.concat(alunos.map((a) => `B: ${a.nome}`));
		getTurmaC("C", (alunos) => {
			nomes = nomes.concat(alunos.map((a) => `C: ${a.nome}`));
			//console.log(nomes);
		});
	});
});

// com promise ...

const getTurmaP = (letra) => {
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

/*
		let nomes = [];
		getTurmaC("A", (alunos) => {
		nomes = nomes.concat(alunos.map((a) => `A: ${a.nome}`));
		getTurmaC("B", (alunos) => {
				nomes = nomes.concat(alunos.map((a) => `B: ${a.nome}`));
				getTurmaC("C", (alunos) => {
				nomes = nomes.concat(alunos.map((a) => `C: ${a.nome}`));
				console.log(nomes);
				});
		});
		});
*/

Promise.all([getTurmaP('A'), getTurmaP('B'), getTurmaP('C')])
		.then(turmas => [].concat(...turmas))
		.then(alunos => alunos.map(alunos => alunos.nome))
		.then(nomes => console.log(nomes))

