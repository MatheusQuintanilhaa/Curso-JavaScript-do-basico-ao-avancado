function infos(age) {

    if (age >= 18) {
        return "Pode entrar na auto-escola";
    } else {
      return   "Não pode entrar na auto-escola";
    }
}

console.log(infos(30));