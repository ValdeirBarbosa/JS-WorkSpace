
// Função e um bloco de código nomeado

// função sen retorno 
function imprimeSoma(a, b){
    console.log(a+b);
};
imprimeSoma(2,3);


// função com retorno
 // b=0 e um valor padrão caso nao seja passado o parametro 
function Soma(a = 0, b = 0){
    return a+b;
};

 console.log(Soma(2,3));
 console.log(Soma(2));
 console.log(Soma());

