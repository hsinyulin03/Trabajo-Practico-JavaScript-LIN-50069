console.log('Ejercicio 2');
{
function convertirCelsiusAFahrenheit(numero){
 const valorenFahrenheit= numero * 1.8 + 32;
 return valorenFahrenheit;
}
let valor=prompt('Ingrese un valor en grados Celsius')
console.log(valor+' °C son equivalentes a '+convertirCelsiusAFahrenheit(valor)+ '°F');
}