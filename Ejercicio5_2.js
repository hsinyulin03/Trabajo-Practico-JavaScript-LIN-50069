console.log('Ejercicio 2');
{
  let libro={
    titulo:'Las Voces del Desierto',
    autor:'Marlo Morgan',
    año:1990,
    esAntiguo: function(){
        const añoActual = new Date().getFullYear();
        const añosDesdePublicacion = añoActual - this.año;
        return añosDesdePublicacion > 10;
    }
  }
  console.log('El libro ' +libro.titulo+' es antiguo: '+libro.esAntiguo())
}