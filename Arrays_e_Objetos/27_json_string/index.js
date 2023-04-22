let pessoa = {
    "nome": "Matheus",
    "idade": 28,
    "profissão": "Programador",
    "hobbies": ["Vídeo game", "Leitura", "Correr"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);


let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaJSON);

console.log(pessoaJSON.hobbies[2]);
console.log(pessoaJSON.hobbies[0]);