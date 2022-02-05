const valores  = [7.7,8.9, 6.3,9.2];
console.log(valores[0],valores[3]);
console.log(valores[4]);

valores[4]  =100;
 console.log(valores[4]);
 console.log(valores.length);
 valores.push({id:4},false, null,"teste"); // insere valores no array
 console.log(valores);

 // remove o ultimo valor do array 
 console.log(valores.pop())
// remove um valor de um index especifico do array
delete valores[0];
console.log(valores)