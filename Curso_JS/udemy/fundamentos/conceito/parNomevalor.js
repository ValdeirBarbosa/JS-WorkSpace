//  par nome valor ou chave valor 

const saudacao = 'Opa!';  // contexto lexico 1

function exec (){
    const saudacao  ="Fala!!"; // contexto lexico 2
    return saudacao;
};
//   objetos sao grups aninhados de pares  nome/valor

const cliente ={
    nome: "pedro",
    idade:32, 
    endereco: {
        logradouro:'Rua muito legal', 
        numero:123

    }
}; 

console.log(saudacao);
console.log(exec());
console.log(cliente);