function testString(string) {
  
  if (string.length > 10) {
    console.log("texto muito longo");
  } else {
    console.log("Texto dentro do limite");
  }
  console.log(string.length);
}

testString("Hello World")
testString("Bom dia")
testString("você não pode fazer isso")