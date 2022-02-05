const escola = "Cod3r";
// pega a letra referida do indice da String
console.log(escola.charAt(3)); 


// caso nao tenha o indice especificado e mostado vazio " "
console.log(escola.charAt(40)); 

// devolve o valor da tabela ASCII 
console.log(escola.charCodeAt(3));

//retorna o valor associado ao indice especificado 
console.log(escola.indexOf('3'));

// substring definindo o inicio da substring no indice 1 
console.log(escola.substring(1));
// retorna =  od3r

// definindo o inicio e o fim da substring
console.log(escola.substring(1,3)); 
// retonra =  od


//concaternar a partir de um 
console.log('Escola '.concat(escola).concat('!'));
// substituir um chacartere da string 
console.log(escola.replace(3,'e'));

// converter string para um array 
console.log("ana, Maria,Pedro".split(','))