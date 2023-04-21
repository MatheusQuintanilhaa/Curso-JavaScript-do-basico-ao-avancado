let age = 26;
let cnh = true;

if (age >= 18 && cnh == !true) {
    console.log("Você não pode dirigir");
} else if (age >= 18 && cnh == true) {
    console.log("Tem permissão para dirigir");
} else {
    console.log("Você ainda é novo para tirar carteira");
}

