const nome = "rebeca";

const concatenacao = 'olá ' + nome +'!';
// template String respeita te mesmo os espaços e quebras de linha 
const  template  =`Olá  
${nome} 
!`;

console.log(concatenacao);
console.log(template)

 // expressoes dentro do template string 

 console.log(`1+1 = ${1+1}`);

 // possivelk chamar funcções dentro de template string 

  const up = texto => texto.toUpperCase();
console.log(`Ei.. ${up("cuidado")}!`);