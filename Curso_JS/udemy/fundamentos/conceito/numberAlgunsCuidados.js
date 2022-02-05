console.log( 7/0); // retorna Infinity 

console.log("10"/2); // neste caso pega o conteudo internmo 
                     // da String  e verifica a possibilidade de conmversão para numerico 


console.log("Show"*2) // retorna NAN 'not a Number'

console.log(0.1 + 0.7) // segue padrão IEEE pode um pouco impreciso porem e padrão 

// console.log(10.toString()) nao e possivel chamar diretamente o o toString usando o valor Literal
// mais e possivel usar quando se usa os parenteses '((10.345).toFixed(2))'
console.log((10.345).toFixed(2))