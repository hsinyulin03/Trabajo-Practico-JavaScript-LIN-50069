console.log('Ejercicio 2');
let pares=[];
for(let i=1;i<=20;i++)
  if(pares.length<=10){
    if(i%2==0){
      pares.push(i);
    }
  
  }
 console.log('Primeros 10 números pares: '+pares);