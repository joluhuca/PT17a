'use strict';

function BinarioADecimal(numStr) {
//numStr>"0101"
//2´indicie*numero
//const variable que se asigna un avlor y no puede ser cambiado
//estructura for: for (inicialización; condición; incremento/decremento) {
var sum=0;
var j=0;
const indexEnd=numStr.length-1;
for(let i=indexEnd; i>=0;i--){
   const element=numStr[i];
   const form=(Math.pow(2,j))*element;
   j++;
   sum=sum+form;
   console.log(form)
}
return sum;
//Array-like>como array
//No es un array, sin embargo, puedo utilizar algunos metodos
}
//console.log("hola");
//console.log("hola".lenght) //muestra el número total de letras 4
//console.log("hola"[2])  //muestra la letra en el lugar dos "l"
//console.log("hola".split(""))  //da un arreglo de letras 


function DecimalABinario(num) {
   if (num === 0) {
      return '0';
    }
    let binary = '';
    while (num > 0) {
      binary = (num % 2) + binary;
      num = Math.floor(num / 2);
    }
    return binary;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
