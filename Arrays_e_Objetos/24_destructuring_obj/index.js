let obj = {
    rodas: 4,
    portas: 4,
    tetosolar: true,
    motor: "2.0",
};

const { rodas: vRodas, portas: vPortas, tetosolar: vTetoSolar, motor: vMotor } = obj;

console.log(vRodas);
console.log(vPortas);
console.log(vTetoSolar);
console.log(vMotor);


let user = {
    name: "Roberta",
    age: 28,
    city: "Araruama",
    job: "Developer",
    single: true,
    hooby: "Guitar",
    favoriteBand: "GnR",
}


const { name: myName, age: myAge, city: myCity, job: myJob, single: mySingle, hooby: myHooby, favoriteBand: myFavoriteBand } = user;


console.log(myCity);
console.log(myAge);
console.log(myFavoriteBand);