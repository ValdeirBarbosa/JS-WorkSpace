console.log(Math.ceil(6.1));
 const obj1 = {};
 obj1.nome = 'bola';
console.log(obj1.nome);

function Obj (nome){
    this.nome = nome;
     this.exec = function(){
         console.log(this.nome);
     }
};


const obj2 = new Obj('Chair');
const obj3 = new Obj('Table');

// console.log(obj2.nome);
obj2.exec()
obj3.exec()
// console.log(obj3.nome);
