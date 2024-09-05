
function fibonacci(numero) {
    
    //Inicializado os dois primeiros numeros da sequencia
    let num1 = 0, num2 = 1;

    if(numero < 0) {
    console.log("Numero invalido");
    return;
    }

    if (numero === 0 || numero === 1) {
        console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
        return;
    }

    //Criando a sequencia
    while (num2 < numero) {
      let proximoNum = num1 + num2;
      num1 = num2;
      num2 = proximoNum;
    }

    if (num2 === numero) {
      console.log(`O número ${numero} pertence a sequencia de Fibonacci`);
    } else {
      console.log(`O número ${numero} não pertence a sequencia de Fibonacci`);
    }
}
fibonacci(32);