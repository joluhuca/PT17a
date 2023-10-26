# Homework JavaScript Avanzado I
/* 
SCOPE AND HOSISTING
Al iniciar el contorno se crea archivo con un contorno global, donde en el L.E Lexical Embayonet, dentro de estos viven las variables definidas (var, const, let(varibales reservadas)) y funciones.
Hoisting - permite reconocer a una variable aún sin haberla definido. el hoisting lee el documento completo no sólo el console.log ,  undefind existe pero sé cuámnto vale, no defined no está definido.
Las funciones crean su propio contexto.
Return es para el código, console.log es para nosotros.

*/
## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.
/*
scope and hoisting
L.E contexto global
{a,b,c}
Fase de ejecución
L.E Contexto local función c
{a=8,b=9,c=10,x=undef,f}
Fase de ejcución Funcion c
x=10
console.log(x)10
console.log(a)8
L.E Contexto local función f
{a=8,b=10,c=10, x=5}
Fase de ejcución funcion f
console.log(b)8
Termina/elimina el contexto de f
console.log(b)10
console.log(x)1
*/
```javascript
x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x);  
   console.log(a);  
   var f = function (a, b, c) {
      b = a;
      console.log(b);  
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b); 
};
c(8, 9, 10);
console.log(b);  
console.log(x);  
```
10
8
8
9
10
1
```javascript
console.log(bar);
console.log(baz);
foo();
function foo() {
   console.log('Hola!');
}
var bar = 1;
baz = 2;
/*
Hoisting busca en el L.E
Ejecicio 2
L.E CONTEXT GLOBAL
{foo=fn,bar}
Fase de ejecución 
console.log(bar)undefined 
console.log(baz)not defined
*/
```
undefined
undefined
Hola!
```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor);
```
Franco
```javascript
var instructor = 'Tony';
console.log(instructor);/* Tony*/
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor);/* Franco*/
   }
})();
console.log(instructor); /* Tony*/
```

```javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor);/* The Flash*/
   console.log(pm);/* Reverse Flash*/
}
console.log(instructor);/* Tony*/
console.log(pm);/* Franco*/
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" //6/3=2
"2" * "3"//2*3=6
4 + 5 + "px"//4+5="9"+concatena"px"=9px
"$" + 4 + 5//"$"+4="$4"+5=$45
"4" - 2//4-2=2
"4px" - 2//Nan
7 / 0//infity
{}[0]//undefined
parseInt("09")//convierte de string a número-9
//El único número que tiene valor  booleano  false es 0
5 && 2//2
2 && 5//5
5 || 0//5
0 || 5//5
[3]+[3]-[10]//"3"+"3"-[10]="33"-10=23
3>2>1//true>1=1>1=false
[] == ![]//===tipo de dato, ==valor
/* 
=> []==![]

=> []==false // Type conversion by the statement itself

=> []==0 // To number of right operand

=> ""==0 // To Primitive call for Array which will in this case convert to empty string

=> 0==0 // To number call of "" which is 0

=> true
*/
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies';
      return snack;
   }
   return snack;
}

getFood(false);
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname;
      },
   },
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function () {
      console.log(2);
   }, 1000);
   setTimeout(function () {
      console.log(3);
   }, 0);
   console.log(4);
}

printing();
```

</br >

---

## **✅ FEEDBACK**

### Usa este [**formulario**](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.
