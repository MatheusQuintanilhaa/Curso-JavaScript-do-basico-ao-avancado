let carros = ["BMW", "Fiat", "VW", "Renault", "Audi"];

console.log(carros.includes("Fiat"));
console.log(carros.includes("Mercedez"));

if (carros.includes("BMW")) {
    console.log("O carro esta na concessionária");
} else {
    console.log("Não possui o carro");
}

// retorna um boolean, se tem no array retorna um true, se não tem retorna um false;

//array de objeto ele não funciona muito bem;

