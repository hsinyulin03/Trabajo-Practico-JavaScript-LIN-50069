console.log('Ejercicio 2');
let numero;
do{
  numero=prompt('Ingrese un numero mayor a 100 ')
  numero=parseInt(numero);// Convertir la entrada a un número entero
}while(numero<=100);
 
  console.log('Ingresaste un numero mayor que 100: '+numero);