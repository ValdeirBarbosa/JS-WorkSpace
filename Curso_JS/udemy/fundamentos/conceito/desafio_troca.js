let a  =1; 
let b = 100 ;

console.log("Variavel 'a' antes da troca "+a );
console.log("Variavel 'b' antes da troca "+b );

// depois da troca os valores das variaveis deve esatr invertido;
// let aux = a

// a = b; 
// b = aux;
// PODE SER REALIZADO EM< JS DA SEGUINTE FORMA :

[a, b ] = [b,a]
console.log("Variavel 'a' após a troca "+a );
console.log("Variavel 'b'  após b troca "+b );