console.log('8. Eventos en DOM');
console.log('Ejericio 1');

{
  const lista = document.getElementById('miLista');
  const elementos = lista.getElementsByTagName('li');

  for (let i = 0; i < elementos.length; i++) {
      elementos[i].addEventListener('click', function() {   //Dentro del bucle, se agrega un evento de clic (click) a cada elemento <li>
          console.log(this.textContent);
      });

   };

}