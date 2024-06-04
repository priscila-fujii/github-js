/*
function recurcivo(max){
    if(max >= 10) return;
    max++;
    console.log(max);
    recurcivo(max);
}
recurcivo(-1);
*/
//---------------------------------------------------------
/*
Sequência de Fibonacci, aplica a recurcividade
Fórmula:
    F(n+2) = F(n+1) + F(n), com n >=1 e(&&) F(1) = F(2) = 1
n=1
F(1+2) = F(1+1) + F(1)
  F3   =  F2    +  F1
  atual = anterior + auxiliar
  ...... ou
  reduza 2 de todos
  F(n) = F(n-1) + F(n-2)
  para:
    se ((n==1) || (n==0)){
        retorne n;
    }
    retorne F(n-1) + F(n-2);

*/
let aux=0;
function seqFibinacci(x){
    if((x == 1) || (x == 0)) return x;
    console.log(x);
    return (seqFibinacci(x-1) + seqFibinacci(x-2));
}
seqFibinacci(10);