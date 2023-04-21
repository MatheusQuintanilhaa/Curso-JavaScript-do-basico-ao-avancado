let capitais = {
    brasil: "Brasília",
    inglaterra: "Londres",
    eua: "Washington",
    canada:"Toronto"
}

let copia = {};


// console.log(Object.keys(capitais));
// console.log(Object.values(capitais));

console.log(Object.assign(copia, capitais));

console.log(copia);