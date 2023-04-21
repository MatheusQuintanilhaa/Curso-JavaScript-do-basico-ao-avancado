let pessoa = {
    nome: "Matheus",
    idade: 28,
    profissão: "Programador",
}

console.log(pessoa.nome);

delete pessoa.nome;

console.log(pessoa.nome);

console.log(pessoa);

pessoa.casado = false;
console.log(pessoa.casado);

pessoa.cor = "pardo";

console.log(pessoa);

pessoa.hobby = "Guitarrista";

console.log(pessoa);

delete pessoa.casado;
console.log(pessoa);