#  Desafio processo seletivo

1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.


#### 3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA); Ao final do processamento, qual será o valor da variável SOMA?

O valor da variável SOMA será 65 quando K = 11.


#### 4) Descubra a lógica e complete o próximo elemento:
a) 1, 3, 5, 7, ___ #9

b) 2, 4, 8, 16, 32, 64, ____ #128

c) 0, 1, 4, 9, 16, 25, 36, ____ #49

d) 4, 16, 36, 64, ____ #100

e) 1, 1, 2, 3, 5, 8, ____ #13

f) 2,10, 12, 16, 17, 18, 19, ____ #20

 
#### 5) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em salas diferentes. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?  

1. Ligar a lâmpada 1 por 10 minutos e desligar depois desse tempo;
2. Ligar o interruptor 2;
3. Ir para sala 1. Se a lâmpada estiver quente, corresponde ao interruptor 1, se estiver acessa ao interruptor 2 e caso esteja desligada, ao 3;
4. Ir para sala 2 e realizar a mesma análise da etapa 3;
5. A última sala será o interruptor que não foi selecionado para a sala 1 e 2.
