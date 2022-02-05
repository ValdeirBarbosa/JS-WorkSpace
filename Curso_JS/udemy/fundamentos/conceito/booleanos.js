let isAtivo = false;

console.log(isAtivo);
isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);


// tipos verdadeiros em javascript 
console.log('tipos verdadeiros em javascript ')
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!! (isAtivo = true));

console.log('tipos falsos em javascript ')

console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));


console.log("Finalizando...")
// devolve o primeiro valor verdadeiro
console.log(!!('' || null || 0 || 'epa'|| 123))

