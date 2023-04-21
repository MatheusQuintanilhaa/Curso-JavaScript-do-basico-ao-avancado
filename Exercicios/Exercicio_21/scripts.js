function verify(dado) {

  if (typeof dado === 'string') {

    console.log("É uma string");

  } else if (typeof dado === 'number') {

    console.log("É um número");

  } else if (typeof dado === 'boolean') {

    console.log("É um boolean");
  }
}


verify(true)
verify(23)
verify("teste")