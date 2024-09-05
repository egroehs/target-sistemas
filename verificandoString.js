
function verificarString(string) {

let count = 0;

//percorrer a string letra por letra e contar cada A
for (let i = 0; i < string.length; i++) {
  if (string[i] === "a" || string[i] === "A") {
    count++;
  }
}

console.log(`Existem ${count} letras "a" na string`)

}

verificarString(`Ola, meu nome é Eduarda`);