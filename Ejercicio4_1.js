console.log('4. Funciones de JavaScript');
console.log('Ejercicio 1');

{
 
  function esPar(numero){
  return numero % 2 === 0;
}
let numero=prompt("Ingrese un numero ");
console.log('El numero '+numero+' es Par: ' +esPar(numero));
}