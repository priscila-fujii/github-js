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
v1 = 0;
v2 = 0;
v3 = 0;
function fibonacci(n) {
    if (n == 0){
        return n;
    }else if(n == 1){
        return n;
    }else if(n>1){
        v3 = fibonacci(n-1) + fibonacci(n-2);
    }
    return 
}
  
console.time("Fibonacci");
console.log(fibonacci(7));
console.timeEnd("Fibonacci");

/*
v1 = 0;
v2 = 1;
v3 = 0;
cont = 0;
function fibo(limite){
    while(cont < limite){
        cont+= 1;
        v3 = v1 + v2;
        console.log(`${v1} + ${v2} = ${v3}, `);
        v1 = v2;
        v2 = v3;
    }
}
fibo(5);
*/