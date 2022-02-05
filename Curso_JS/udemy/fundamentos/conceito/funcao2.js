//  armazenando uma fu em uam variavel 
const imprimeSoma = function (a, b) {
    console.log(a + b);
};

imprimeSoma(2, 3);

// armazenando uma função arrow  em uma variavel 

const soma = (a, b) => {
    return a + b;
};
console.log(soma(2, 3));


// retorno impicito na arrow function 

const subtracao = (a, b) => a - b;
console.log(subtracao(2, 3));

const arrowSoma = (a, b) => console.log("arrowSoma = ",a + b);
arrowSoma(10,10);