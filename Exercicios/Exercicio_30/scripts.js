// Crie um array com 5 nomes, incluindo o seu;
// Verifique se o seu nome existe no array;
// Se existir imprima alguma mensagem no console;

let names = ["Marcelle", "Gustavo", "Matheus", "Sarah", "Willian"];

if (names[2] == "Matheus") {
    console.log("My name exists in this list");
} else {
    console.log("Where's my name?");
};


if (names.includes("Matheus")) {
    console.log("The name was found");
} else {
    console.log("Something's wrong");
};