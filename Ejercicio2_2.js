console.log('Ejercicio 2');
{
  let num1=prompt("Ingrese un numero y te dire si es par o impar ");
  // Convertir el número ingresado a un número entero
  let numero=parseInt(num1);

  //isNaN intenta convertir el parámetro pasado a un número. Si el parámetro no se puede convertir, devuelve true; en caso contrario, devuelve false.
  if(isNaN(numero)){   
    console.log("El valor ingresado no es un numero valido"); 
  }else if(numero % 2 === 0){
    console.log('El numero, '+numero+ ' es par');
    
  }else{
    console.log('El numero, '+numero+ ' es impar');
  }
}