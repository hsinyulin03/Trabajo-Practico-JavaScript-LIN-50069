console.log('2-Operadores lógicos y condicionales');
console.log('Ejercicio 1');
{   let a=1;
    let b=2;
    let c =3;
    let mayor;

      if(b>=a && b>=c){
        mayor=b;
      } else if(a>=b && a>=c){
        mayor=a;
      }
        else{
          mayor=c;
      }
      console.log('El mayor valor entre ' + a + ' , '+b+' y '+c+' es '+mayor);
}