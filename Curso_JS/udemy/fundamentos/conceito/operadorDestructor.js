//  recusro add no EMCA 2015  ES2015

const pessoa = {
    nome: 'ANA',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 100
    }
};

const { nome, idade } = pessoa;
console.log(nome, idade);
// atribuindo 
const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada);
const { nome: n, idade: i } = pessoa;
console.log(n, i);

// extraindo valores de endereço (neste exemplo)

const { endereco:{ logradouro, numero, cep }} = pessoa;
 console.log(logradouro, numero, cep);